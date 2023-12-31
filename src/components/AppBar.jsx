import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/queries'
import SignOutButton from './SignOutButton'
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
    padding: 10,
    fontSize: theme.fontSizes.subheading
  }
})

const AppBarTab = ({ text, path }) => (
  <Link to={path} >
    <Text style={styles.text}>{text}</Text>
  </Link>
)

const AppBar = () => {

  const userResult = useQuery(GET_CURRENT_USER)

  if (userResult.loading) {
    return null
  }
  const userSignedIn = userResult.data.me !== null

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" path="/" />
        {!userSignedIn && <AppBarTab text="Sign in" path="/signin" />}
        {!userSignedIn && <AppBarTab text="Sign up" path="/signup" />}
        {userSignedIn && <AppBarTab text="Create a review" path="/createReview" />}
        {userSignedIn && <AppBarTab text="My reviews" path="/myReviews" />}
        {userSignedIn && <SignOutButton textStyle={styles.text} />}
      </ScrollView>
    </View>
  )
}

export default AppBar