import { useNavigate } from 'react-router-dom'
import GeneralForm from './general-form/GeneralForm'
import axios from 'axios'


const SignInForm = () => {

    async function AuthApiComponent(authData) {

        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmWKRtnIdSgO7HhmrSTG4H6EpkrcphvYc', authData)
        console.log((JSON.stringify(response.data, null, 2)))
    }

    return (

        <div>
            <GeneralForm
                title={'Авторизация'}
                btnName={'Войти'}
                authApi={AuthApiComponent}
            />
        </div>
    )
}

export default SignInForm