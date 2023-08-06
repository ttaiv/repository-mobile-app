import { View, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'

import useSignIn from '../hooks/useSignIn'
import FormikTextInput from './FormikTextInput'
import Text from './Text'
import * as yup from 'yup'
import theme from '../theme'

const styles = StyleSheet.create({
  signinButton: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderWidth: 1,
    marginTop: 5,
    margin: 20,
  },
  signinButtonText: {
    color: theme.colors.textSecondary,
    alignSelf: 'center'
  },
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
      <Pressable style={styles.signinButton} onPress={onSubmit}>
        <Text style={styles.signinButtonText}>Sign in</Text>
      </Pressable>
    </View>
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

  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}
      validationSchema={validationSchema}>
        {(props) => <SignInForm onSubmit={props.handleSubmit} />}
    </Formik>
  )
}

export default SignIn