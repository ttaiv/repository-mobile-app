import { View, StyleSheet } from 'react-native'
import format from 'date-fns/format'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row'
  },
  ratingContainer: {
    width: 40,
    height: 40,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  userDateAndTextContainer: {
    flex: 1,
    paddingRight: 10
  },
  dateContainer: {
    flexDirection: 'row'
  }

  
})

const Rating = ({ review }) => (
  <View style={styles.ratingContainer}>
    <Text fontSize='subheading' color='primary' fontWeight='bold'>{review.rating}</Text>
  </View>
)

const UserDateAndText = ({ review }) => (
  <View style={styles.userDateAndTextContainer}>
    <Text fontWeight='bold'>{review.user.username}</Text>
    <View style={styles.dateContainer}>
      <Text color='textOther'> {format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
    </View>
    <Text style={{ marginTop: 10 }}>{review.text}</Text>
  </View>
)

const ReviewItem = ({ review }) => (
  <View style={styles.container}>
    <Rating review={review} />
    <UserDateAndText review={review}/>
  </View>
)

export default ReviewItem