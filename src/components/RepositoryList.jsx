import { FlatList, View, StyleSheet } from 'react-native'
import useRepositories from '../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    paddingBottom: 10,
  }
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories, selectedSort, setSelectedSort }) => {

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
        ListHeaderComponent={() => <SortPicker selected={selectedSort} setSelected={setSelectedSort} />}
      />
  )
}

const SortPicker = ({ selected, setSelected }) => (
  <Picker
    selectedValue={selected} 
    onValueChange={(itemValue) => setSelected(itemValue)}
    prompt='Choose sorting method'
  >
    <Picker.Item label='Latest repositories' value='latest' />
    <Picker.Item label='Highest rated repositories' value='highestRated' />
    <Picker.Item label='Lowest rated repositories' value='lowestRated' />
  </Picker>

)

const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState('latest')
  const { repositories } = useRepositories(selectedSort)

  return <RepositoryListContainer 
    repositories={repositories}
    selectedSort={selectedSort}
    setSelectedSort={setSelectedSort}
  />
}

export default RepositoryList