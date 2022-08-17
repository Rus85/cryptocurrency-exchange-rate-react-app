import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CgMenuRound } from 'react-icons/cg'
import { CgCloseO } from 'react-icons/cg'
import { motion } from 'framer-motion'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/userAuth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/userSlice'
import quitIcon from '../../assets/quitIcon.png'
import './mobileNavigation.css'

const MobileNavigation = () => {

    const { isAuth } = useAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = useCallback(() => {
        dispatch(removeUser())
        localStorage.clear()
        navigate('/')
    }, [dispatch, navigate])

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    const [open, setOpen] = useState(false)

    const hamburgerIcon = <CgMenuRound className='hamburger' size={'40px'} color={'white'}
        onClick={() => setOpen(!open)}
    />

    const closeIcon = <CgCloseO className='hamburger' size={'40px'} color={'white'}
        onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false)

    function multipleFuncs() {
        handleLogout()
        closeMobileMenu()
    }

    return (
        <>
            {open ? closeIcon : hamburgerIcon}
            {open &&
                <div className='mobile-container'>
                    <ul className='menu'>
                        <motion.li
                            initial={animateFrom}
                            animate={animateTo}
                            transition={{ delay: 0.05 }}
                            className='menu_item'>
                            <NavLink onClick={() => closeMobileMenu()} className='menu_item_link' end
                                style={({ isActive }) => ({ color: isActive ? '#fff' : '#0d6efd' })}
                                to='/'>Главная</NavLink>
                        </motion.li>
                        <motion.li
                            initial={animateFrom}
                            animate={animateTo}
                            transition={{ delay: 0.10 }}
                            className='menu_item'>
                            <NavLink onClick={() => closeMobileMenu()} className='menu_item_link' end
                                style={({ isActive }) => ({ color: isActive ? '#fff' : '#0d6efd' })}
                                to='/breifcase'>Личный кабинет</NavLink>
                        </motion.li>
                        <hr className='hr-line' />
                        <motion.li
                            initial={animateFrom}
                            animate={animateTo}
                            transition={{ delay: 0.10 }}
                            className='menu_item'>
                            {isAuth ? <div className='quit-btn-mobile'>
                                <a onClick={() => multipleFuncs()} className=''>Выйти<img src={quitIcon} alt='' /></a>
                            </div> : null}
                        </motion.li>

                    </ul>
                </div>
            }
        </>
    )
}

export default MobileNavigation