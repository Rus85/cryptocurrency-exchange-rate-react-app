import { useNavigate } from 'react-router-dom'
import GeneralForm from './general-form/GeneralForm'
import AuthApiComponent from '../../apiComponents/AuthApiComponent'


const SignUpForm = () => {

   const data = AuthApiComponent('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmWKRtnIdSgO7HhmrSTG4H6EpkrcphvYc')
    
    return (

        <div>
            <GeneralForm 
            title={'Регистрация'}
            btnName={'Регистрация'}
            authApi={data}
            />
        </div>
    )    
}

export default SignUpForm