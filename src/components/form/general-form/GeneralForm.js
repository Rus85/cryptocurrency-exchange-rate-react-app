import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './form.css'

const GeneralForm = (props) => {

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

            onSubmit={values => props.authApi(values)}
        >

            <div className="form-block">
                <Form className="form">
                    <h2>{props.title}</h2>
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
                    <button type="submit">{props.btnName}</button>
                </Form>
            </div>
        </Formik>
    )
}

export default GeneralForm