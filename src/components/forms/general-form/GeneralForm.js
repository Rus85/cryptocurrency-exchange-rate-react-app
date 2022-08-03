import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import './general-form.css'

const GeneralForm = (props) => {

    return (

        <Formik
            initialValues={{
                email: '',
                password: '',
                // returnSecureToken: true
            }}

            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Неправильный email адрес')
                    .required('Обязательное поле'),
                password: Yup.string()
                    .required('Обязательное поле')
                    .min(6, 'Минимум 6 символов')
            })}

            onSubmit={values => props.authApi(values.email, values.password)}
        >

            <motion.div className='form-page'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
                        <button type="submit" className="btn btn-outline-success">{props.btnName}</button>
                        <button type="button" className="btn btn-outline-success" onClick={props.redirectBtn}>{props.logAndRegBtn}</button>
                    </Form>
                </div>
            </motion.div>
        </Formik>
    )
}

export default GeneralForm