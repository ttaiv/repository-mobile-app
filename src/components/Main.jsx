import { View, StyleSheet } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import SignIn from './SignIn'
import RepositoryView from './RepositoryView'
import CreateReview from './CreateReview'
import SignUp from './SignUp'
import UserReviews from './UserReviews'

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
        <Route path='/signup' element={<SignUp />} exact />
        <Route path="/myReviews" element={<UserReviews />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  </>
)

export default Main