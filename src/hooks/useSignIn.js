import { useMutation } from "@apollo/client"
import { AUTENTICATE } from "../graphql/mutations"

const useSingIn = () => {

  const [mutate, result] = useMutation(AUTENTICATE)

  const signIn = async (credentials) => {
    await mutate({ variables: { credentials } })
  }

  return [signIn, result]
}

export default useSingIn