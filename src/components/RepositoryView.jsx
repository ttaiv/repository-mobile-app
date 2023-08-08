import { View } from 'react-native'
import { useParams } from 'react-router-native'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'
import * as Linking from 'expo-linking'
import RepositoryItem from './RepositoryItem'
import Button from './Button'


const RepositoryView = () => {

  const { repositoryId } = useParams()
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { id: repositoryId }
  })

  if (loading) {
    return null
  }
  const repository = data.repository

  const onPress = () => {
    Linking.openURL(repository.url)
  }

  return (
    <View>
      <RepositoryItem repository={repository} >
        <Button onPress={onPress} text='Open in GitHub' />
      </RepositoryItem>
    </View>
  )
}

export default RepositoryView