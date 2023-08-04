import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
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

const AppBarTab = ({ text, path }) => (
  <Link to={path} >
    <Text style={styles.text}>{text}</Text>
  </Link>
)

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" path={'/'} />
        <AppBarTab text="Sign in" path={'/signin'} />
      </ScrollView>
    </View>
  )
}

export default AppBar