import { useNavigate } from 'react-router-dom'
import GeneralForm from './general-form/GeneralForm'
import AuthApiComponent from '../../apiComponents/AuthApiComponent'


const SignInForm = () => {

   const data = AuthApiComponent('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmWKRtnIdSgO7HhmrSTG4H6EpkrcphvYc')

    return (

        <div>
            <GeneralForm
                title={'Авторизация'}
                btnName={'Войти'}
                authApi={data}
            />
        </div>
    )
}

export default SignInForm