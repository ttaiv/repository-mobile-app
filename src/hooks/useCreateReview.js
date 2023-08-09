import { CREATE_REVIEW } from "../graphql/mutations"
import { useMutation } from "@apollo/client"

const useCreateReview = () => {
  const [ mutate ] = useMutation(CREATE_REVIEW)

  const createReview = async (review) => {
    const result = await mutate({ variables: { review }})
    return result
  }

  return [createReview]
}

export default useCreateReview