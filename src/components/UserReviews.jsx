import { FlatList, StyleSheet, View } from 'react-native'
import useUserReviews from '../hooks/useUserReviews'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
  seperator: {
    height: 10,
  }
})

const UserReviews = () => {

  const userReviews = useUserReviews()

  return (
    <FlatList 
      data={userReviews}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id }
    />
  )
}

export default UserReviews