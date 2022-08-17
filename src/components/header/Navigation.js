import { NavLink } from 'react-router-dom'
import QuitButton from '../quitButton/QuitButton'
import './navigation.css'


const Navigation = () => {

    return (
        <div className='desktop-container'>
            <ul className='menu'>
                <li className='menu_item'>
                    <NavLink className='menu_item_link' end
                        style={({ isActive }) => ({ color: isActive ? '#fff' : '#0d6efd' })}
                        to='/'>Главная</NavLink>
                </li>
                <li className='menu_item'>
                    <NavLink className='menu_item_link' end
                        style={({ isActive }) => ({ color: isActive ? '#fff' : '#0d6efd' })}
                        to='/breifcase'>Личный кабинет</NavLink>
                </li>
                <QuitButton />
            </ul>
        </div>
    )
}

export default Navigation