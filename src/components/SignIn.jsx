import { View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'

import useSignIn from '../hooks/useSignIn'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'
import theme from '../theme'
import Button from './Button'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
  }
})

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required('Password is required'),
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <Button onPress={onSubmit} text='Sign in' />
    </View>
  )
}

export const SignInFormContainer = ({ onSubmit }) => {

  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}
      validationSchema={validationSchema}>
        {(props) => <SignInForm onSubmit={props.handleSubmit} />}
    </Formik>
  )
}

const SignIn = () => {

  const [ signIn ] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      await signIn({ username, password})
      navigate('/')
    } catch (error) {
      console.log('error in sign in', error)
    }
  }

  return <SignInFormContainer onSubmit={onSubmit} />

}

export default SignIn