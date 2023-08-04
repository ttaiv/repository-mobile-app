import { Text, View, StyleSheet } from 'react-native'
import RepositoryList from './components/RepositoryList'
import AppBar from './components/AppBar'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => (
  <>
    <AppBar />
    <View style={styles.container}>
      <Text>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  </>
)

export default Main