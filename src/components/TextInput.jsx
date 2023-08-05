import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  textInput: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    padding: 10,
    margin: 20,
    marginBottom: 10,
    marginTop: 10,
  },
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, style]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput