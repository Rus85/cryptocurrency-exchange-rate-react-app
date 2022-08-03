import { useNavigate } from 'react-router-dom'
import { setUser } from '../components/store/userSlice'
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from 'react'
import { useCallback } from 'react'

const useLoginUser = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = useCallback((email, password) => {
        setLoading(true)
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: localStorage.setItem('token', user.accessToken)
                }))
                navigate('/breifcase')
            })
            .catch(() => alert('Неверный email или пароль', setLoading(false)))
    }, [dispatch, navigate])

    return { handleLogin, loading }
}

export default useLoginUser