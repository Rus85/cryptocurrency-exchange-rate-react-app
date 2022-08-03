import { useNavigate } from 'react-router-dom'
import GeneralForm from './general-form/GeneralForm'
import useRegisterUser from '../../firebaseApi/useRegisterUser'
import Spinner from '../spinner/Spinner'


const SignUpForm = () => {

    const navigate = useNavigate()
    const { handleRegistered, loading } = useRegisterUser()

    if (loading) return <Spinner />

    const redirectBtn = () => {
        navigate('/signin')
    }

    return (

        <div>
            <GeneralForm
                title={'Регистрация'}
                btnName={'Регистрация'}
                logAndRegBtn={'Уже зарегистрированы?'}
                redirectBtn={redirectBtn}
                authApi={handleRegistered}
            />
        </div>
    )
}

export default SignUpForm