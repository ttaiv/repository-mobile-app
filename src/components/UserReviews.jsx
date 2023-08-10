import { FlatList, StyleSheet, View, Alert } from 'react-native'
import useUserReviews from '../hooks/useUserReviews'
import useDeleteReview from '../hooks/useDeleteReview'
import ReviewItem from './ReviewItem'
import { useNavigate } from 'react-router-native'
import Button from './Button'
import theme from '../theme'

const styles = StyleSheet.create({
  seperator: {
    height: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.colors.backgroundSecondary,
  },
  deleteButton: {
    backgroundColor: 'red'
  }
})

const UserReview = ({ review, viewRepository, handleDelete }) => (
  <>
    <ReviewItem review={review} />
    <View style={styles.buttonsContainer}>
      <Button text='View repository' onPress={() => viewRepository(review)}/>
      <Button text='Delete review' buttonStyle={styles.deleteButton} onPress={() => handleDelete(review)}/>
    </View>
  </>
)

const UserReviews = () => {

  const [userReviews, refetchReviews] = useUserReviews()
  const navigate = useNavigate()
  const deleteReview = useDeleteReview()

  const viewRepository = (review) => {
    navigate(`/${review.repositoryId}`)
  }
  const handleDelete = async (review) => {
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel'
      },
      {
        text: 'Delete',
        onPress: async () => {
          await deleteReview(review)
          refetchReviews()
        }
      }
    ])
  }

  return (
    <FlatList 
      data={userReviews}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      renderItem={({ item }) => 
        <UserReview review={item} viewRepository={viewRepository} handleDelete={handleDelete}/>
      }
      keyExtractor={({ id }) => id }
    />
  )
}

export default UserReviews