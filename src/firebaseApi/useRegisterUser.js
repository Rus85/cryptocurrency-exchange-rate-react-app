import { setUser } from '../components/store/userSlice'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const useRegisterUser = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRegistered = useCallback((email, password) => {
        setLoading(true)
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: localStorage.setItem('token', user.accessToken)
                }))
                navigate('/breifcase')
            })
            .catch(() => alert('Пользователь с таким email уже зарегистрирован', setLoading(false)))
    }, [dispatch, navigate])

    return { handleRegistered, loading }
}

export default useRegisterUser