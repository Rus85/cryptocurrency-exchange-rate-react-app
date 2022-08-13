import { useCallback } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/userAuth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/userSlice'
import './header.css'


const Header = () => {

    const { isAuth } = useAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = useCallback(() => {
        dispatch(removeUser())
        localStorage.clear()
        navigate('/')
    }, [dispatch, navigate])

    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <NavLink className='nav-link' end
                                style={({ isActive }) => ({ color: isActive ? '#fff' : '#0d6efd' })}
                                to='/'>Главная</NavLink>
                        </li>
                        <li className="nav-item menu_item">
                            <NavLink className='nav-link' end
                                style={({ isActive }) => ({ color: isActive ? '#fff' : '#0d6efd' })}
                                to='/breifcase'>Личный кабинет</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {
                isAuth ? <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button onClick={() => handleLogout()} className="btn btn-primary me-md-6 quit-btn" type="button">Выйти</button>
                </div> : null}
        </nav>
        </>
    )
}

export default Header