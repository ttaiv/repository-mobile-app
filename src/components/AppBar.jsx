import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: theme.colors.secondary,
  },
  text: {
    color: theme.colors.textSecondary,
    padding: 10
  }
})

const AppBarTab = ({ text, path }) => (
  <Link to={path} >
    <Text style={styles.text} fontSize='subheading'>{text}</Text>
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