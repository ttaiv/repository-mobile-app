import { useMutation } from "@apollo/client"
import { AUTENTICATE } from "../graphql/mutations"
import { useApolloClient } from "@apollo/client"
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTENTICATE)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signIn = async (credentials) => {
    const { data } = await mutate({ variables: { credentials } })
    const token = data.authenticate.accessToken
    await authStorage.setAccessToken(token)
    apolloClient.resetStore()
  }

  return [signIn, result]
}

export default useSignIn