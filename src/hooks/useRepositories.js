import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ selectedSort, filter, first }) => {

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

  const variables = { ...selectQueryVariables(selectedSort), searchKeyword: filter, first }

  const { loading, data, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  })

  const handeFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage
    if (!canFetchMore) {
      return
    }
    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      }
    })
  }

  return {
    repositories: data?.repositories,
    fetchMore: handeFetchMore,
    loading,
    ...result
  }
}

export default useRepositories