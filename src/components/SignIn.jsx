import { View, Pressable } from 'react-native'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import Text from './Text'

const onSubmit = (values) => {
  console.log(values)
}

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
      {(props) => <SignInForm onSubmit={props.handleSubmit} />}
    </Formik>
  )
}

export default SignIn