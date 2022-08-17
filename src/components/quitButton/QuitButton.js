import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/userAuth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/userSlice'
import './quitButton.css'

const QuitButton = () => {

    const { isAuth } = useAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = useCallback(() => {
        dispatch(removeUser())
        localStorage.clear()
        navigate('/')
    }, [dispatch, navigate])

    return (
        <div>
            {
                isAuth ? <div className="quit-btn">
                    <button onClick={() => handleLogout()} className="btn btn-primary me-md-6" type="button">Выйти</button>
                </div> : null}
        </div>
    )
}

export default QuitButton