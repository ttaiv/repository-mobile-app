import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (selectedSort) => {

  const selectQueryVariables = (selectedSort) => {
    switch (selectedSort) {
      case 'latest':
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC' }
      case 'highestRated':
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' }
      case 'lowestRated':
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
      default:
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC' }
    }
  }

  const { loading, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: selectQueryVariables(selectedSort)
  })

  const repositories = loading ? null : data.repositories

  return { repositories, loading }
}

export default useRepositories