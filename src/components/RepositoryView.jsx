import { View, FlatList, StyleSheet } from 'react-native'
import { useParams } from 'react-router-native'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'
import * as Linking from 'expo-linking'
import RepositoryItem from './RepositoryItem'
import Button from './Button'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
  reviewSeperator: {
    height: 10
  },
  infoContainer: {
    marginBottom: 10
  }
})


const RepositoryInfo = ({ repository, onPress }) => {

  return (
    <View style={styles.infoContainer}>
      <RepositoryItem repository={repository} >
        <Button onPress={onPress} text='Open in GitHub' />
      </RepositoryItem>
    </View>
  )
}

const RepositoryView = () => {

  const { repositoryId } = useParams()
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { id: repositoryId },
    fetchPolicy: 'cache-and-network',
  })

  if (loading) {
    return null
  }
  const repository = data.repository
  const reviewNodes = data.repository.reviews.edges.map(edge => edge.node)

  const onPress = () => {
    Linking.openURL(repository.url)
  }

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} onPress={onPress} />}
      ItemSeparatorComponent={() => <View style={styles.reviewSeperator} />}
    />
  )
}

export default RepositoryView