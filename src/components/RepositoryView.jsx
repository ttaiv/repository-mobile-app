import { View, FlatList, StyleSheet } from 'react-native'
import { useParams } from 'react-router-native'
import useSingleRepository from '../hooks/useSingleRepository'
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
  
  const {
    repository, reviews, loading, fetchMore
  } = useSingleRepository({ id: repositoryId, first: 10 })
  
  if (loading) {
    return null
  }

  const onPress = () => {
    Linking.openURL(repository.url)
  }

  const onEndReached = () => {
    fetchMore()
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} onPress={onPress} />}
      ItemSeparatorComponent={() => <View style={styles.reviewSeperator} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  )
}

export default RepositoryView