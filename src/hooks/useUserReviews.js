import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/queries'

const useUserReviews = () => {

  const { data, loading } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true }
  })
  const userReviews = loading
    ? []
    : data.me.reviews.edges.map(edge => edge.node)
  
  console.log('data', data)
  console.log('userRewiews', userReviews)

  return userReviews

}

export default useUserReviews