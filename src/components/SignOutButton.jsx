import { View, Pressable } from 'react-native'
import { useApolloClient } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import useAuthStorage from '../hooks/useAuthStorage'

import Text from './Text'

const SignOutButton = ({ textStyle }) => {

  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()
  const navigate = useNavigate()

  const onPress = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
    navigate('/')
  }

  return (
    <View>
      <Pressable onPress={onPress}>
        <Text style={textStyle}>Sign out</Text>
      </Pressable>
    </View>
  )
}

export default SignOutButton