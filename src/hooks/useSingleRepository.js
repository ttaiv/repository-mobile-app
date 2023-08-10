import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useSingleRepository = (variables) => {
  const { data, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    variables,
    fetchPolicy: 'cache-and-network',
  })

  const handeFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage
    if (!canFetchMore) {
      return
    }
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables
      }
    })
  }
  const repository = data?.repository
  const reviewNodes = repository?.reviews.edges.map(edge => edge.node)

  return {
    reviews: reviewNodes,
    repository,
    loading,
    fetchMore: handeFetchMore
  }
}

export default useSingleRepository