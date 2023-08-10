import { FlatList, View, StyleSheet } from 'react-native'
import useRepositories from '../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'
import { Picker } from '@react-native-picker/picker'
import { useState, Component } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { Searchbar } from 'react-native-paper'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    paddingBottom: 10,
  },
  listheader: {
    marginTop: 5,
  }
})

const ItemSeparator = () => <View style={styles.separator} />

export class RepositoryListContainer extends Component {
  renderHeader = () => {
    const { selectedSort, setSelectedSort, setFilter } = this.props
    return (
      <SortAndFilterOptions 
        selectedSort={selectedSort} 
        setSelectedSort={setSelectedSort} 
        setFilter={setFilter}
      />)
  }

  render() {
    const { repositories } = this.props

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
        ListHeaderComponent={this.renderHeader}
      />
    )
  }
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

const SortAndFilterOptions = ({ selectedSort, setSelectedSort, setFilter }) => (
  <View style={styles.listheader}>
    <Searchbar placeholder='Search' onChangeText={query => setFilter(query)} />
    <SortPicker selected={selectedSort} setSelected={setSelectedSort} />
  </View>
)

const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState('latest')
  const [filter, setFilter] = useState('')
  const { repositories } = useRepositories(selectedSort, filter)

  const debouncedSetFilter = useDebouncedCallback(filter => {
    setFilter(filter)
  }, 500)

  return <RepositoryListContainer 
    repositories={repositories}
    selectedSort={selectedSort}
    setSelectedSort={setSelectedSort}
    setFilter={debouncedSetFilter}
    filter={filter}
  />
}

export default RepositoryList