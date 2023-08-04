import { View, StyleSheet, Text, Pressable } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: '#24292e'
  },
  text: {
    color: '#fff',
    fontSize: 17,
    padding: 10
  }
})

const AppBarTab = ({ text }) => (
  <Pressable>
    <Text style={styles.text}>{text}</Text>
  </Pressable>
)

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
    </View>
  )
}

export default AppBar