import { FlatList, View, StyleSheet } from 'react-native'
import useRepositories from '../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    paddingBottom: 10,
  }
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {

  const { repositories } = useRepositories()

  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : []

  const renderItem = ({ item }) => {
    return (
      <RepositoryItem repository={item} />
    )
  }

  return (
      <FlatList
        style={styles.container}
        data={repositoryNodes}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
      />
  )
}

export default RepositoryList