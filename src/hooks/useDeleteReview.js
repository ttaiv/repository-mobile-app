import { DELETE_REVIEW } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

const useDeleteReview = () => {

  const [ mutate ] = useMutation(DELETE_REVIEW)

  const deleteReview = async (review) => {
    await mutate({ variables: { id: review.id } })
  }

  return deleteReview
}

export default useDeleteReview