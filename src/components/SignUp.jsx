import { View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import useSignIn from '../hooks/useSignIn'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'
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
  username: yup.string().min(5).max(30).required(),
  password: yup.string().min(5).max(30).required(),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('You must confirm your password')
})

const SignUpForm = ({ onSubmit }) => (
  <View style={styles.container}>
    <FormikTextInput name='username' placeholder='Username' />
    <FormikTextInput name='password' placeholder='Password' secureTextEntry />
    <FormikTextInput name='passwordConfirmation' placeholder='Confirm password' secureTextEntry />
    <Button onPress={onSubmit} text='Sign up' />
  </View>
)

const SignUp = () => {

  const [ signIn ] = useSignIn()
  const navigate = useNavigate()
  const [ signUp ] = useMutation(CREATE_USER)

  const onSubmit = async (values) => {
    const { username, password } = values
    const { data } = await signUp({ variables: { user: { username, password } } })
    const createdUsername = data.createUser.username
    const credentials = { username: createdUsername, password }
    await signIn(credentials)
    navigate('/')
  }

  return (
    <Formik 
      initialValues={{ username: '', password: '', passwordConfirmation: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
        {(props) => <SignUpForm onSubmit={props.handleSubmit} />}
    </Formik>

  )
}

export default SignUp