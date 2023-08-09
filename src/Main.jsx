import { View, StyleSheet } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import RepositoryList from './components/RepositoryList'
import AppBar from './components/AppBar'
import SignIn from './components/SignIn'
import RepositoryView from './components/RepositoryView'
import CreateReview from './components/CreateReview'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
})

const Main = () => (
  <>
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path='/:repositoryId' element={<RepositoryView />} exact />
        <Route path="/createReview" element={<CreateReview />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  </>
)

export default Main