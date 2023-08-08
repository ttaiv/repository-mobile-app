import { Pressable , StyleSheet } from "react-native"
import Text from "./Text"
import theme from "../theme"

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
    margin: 20,
  },
  buttonText: {
    color: theme.colors.textSecondary,
    alignSelf: 'center'
  },
})

const Button = ({ buttonStyle, textStyle, text, onPress }) => {
  const appliedButtonStyle = [styles.button, buttonStyle]
  const appliedTextStyle = [styles.buttonText, textStyle]

  return (
    <Pressable style={appliedButtonStyle} onPress={onPress}>
      <Text style={appliedTextStyle}>{text}</Text>
    </Pressable>
  )
}

export default Button
