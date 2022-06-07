import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <div className='header-block'>
            <nav >
                <ul className='menu'>
                    <li className='menu-item'>
                        <NavLink className='menu-item-link' end
                        style={({ isActive }) => ({ color: isActive ? '#fff' : '#0000CD' })}
                        to='/'>Главная</NavLink>
                    </li>
                    <li className='menu-item'>
                        <NavLink className='menu-item-link' end
                        style={({ isActive }) => ({ color: isActive ? '#fff' : '#0000CD' })}
                        to='/breifcase'>Личный кабинет</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header