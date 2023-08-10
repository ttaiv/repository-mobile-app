import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/queries'

const useUserReviews = () => {

  const { data, loading, refetch } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true }
  })
  const userReviews = loading
    ? []
    : data.me.reviews.edges.map(edge => edge.node)

  return [userReviews, refetch]

}

export default useUserReviews