import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './form.css'
import axios from 'axios'


const AuthForm = () => {

    // async function signInHandler(authData) {
      
    //     const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmWKRtnIdSgO7HhmrSTG4H6EpkrcphvYc', authData)
    //     console.log((JSON.stringify(response.data, null, 2)))
    // }
   
    async function signUpHandler(regData) {
      
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmWKRtnIdSgO7HhmrSTG4H6EpkrcphvYc', regData)
        console.log((JSON.stringify(response.data, null, 2)))
    }

    return (

        <Formik
            initialValues={{
                email: '',
                password: '',
                returnSecureToken: true
            }}

            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Неправильный email адрес')
                    .required('Обязательное поле'),
                password: Yup.string()
                    .required('Обязательное поле')
                    .min(3, 'Минимум 3 символа')
            })}

            onSubmit={values => console.log(signUpHandler(values))}
        >

            <div className="form-block">
                <Form className="form">
                    <h2>Зарегистрироваться</h2>
                    <label htmlFor="email">Email</label>
                    <Field
                        id='email'
                        name='email'
                        type='email'
                    />
                    <ErrorMessage className='error' name='email' component='div' />
                    <label htmlFor="password">Пароль</label>
                    <Field
                        id='password'
                        name='password'
                        type='password'
                    />
                    <ErrorMessage className='error' name='password' component='div' />
                    <button type="submit">Регистрация</button>
                </Form>
            </div>
        </Formik>
    )
}

export default AuthForm