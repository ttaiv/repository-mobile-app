import { View, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import Text from './Text'

const styles = StyleSheet.create({
  signinButton: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 10,
    borderWidth: 1,
    marginTop: 5,
    fontSize: 12,
    margin: 20,
  },
  signinButtonText: {
    color: 'white',
    alignSelf: 'center'
  }
})

const onSubmit = (values) => {
  console.log(values)
}

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <Pressable style={styles.signinButton} onPress={onSubmit}>
        <Text style={styles.signinButtonText}>Sign in</Text>
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