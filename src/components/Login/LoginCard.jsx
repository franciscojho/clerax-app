import { Formik } from 'formik'
import * as Yup from 'yup'
import LoginForm from './LoginForm'

const LoginCard = () => {
    return (
        <div>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '' }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must 15 characters at least')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(15, 'Must 15 characters at least')
                        .required('Required'),
                    email: Yup.string().email('The format is incorrect').required('Required'),
                })}>
                {() => <LoginForm />}
            </Formik>
        </div>
    )
}

export default LoginCard
