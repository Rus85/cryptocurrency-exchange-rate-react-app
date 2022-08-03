import { useNavigate } from 'react-router-dom'
import useLoginUser from '../../firebaseApi/useLoginUser'
import GeneralForm from './general-form/GeneralForm'
import Spinner from '../spinner/Spinner'


const SignInForm = () => {

    const navigate = useNavigate()
    const { handleLogin, loading } = useLoginUser()

    if (loading) return <Spinner />

    const redirectBtn = () => {
        navigate('/signup')
    }

    return (

        <div className='signin-modal'>
            <GeneralForm
                title={'Авторизация'}
                btnName={'Войти'}
                logAndRegBtn={'Нет аккаунта?'}
                redirectBtn={redirectBtn}
                authApi={handleLogin}
            />
        </div>
    )
}

export default SignInForm