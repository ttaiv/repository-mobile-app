import { View, Image, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
  },
  imageAndInfo: {
    flexDirection: 'row',
    flexGrow: 1,
    padding: 10,
  },
  description: {
    paddingRight: 50
  },
  container: {
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  info: {
    paddingLeft: 10,
  },
  language: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 5,
    alignSelf: 'flex-start',
    marginTop: 5,
    fontSize: 12,
  },
  keyNumbers: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  keyNumber: {
    alignItems: 'center',
  }
})

const ImageAndInfo = ({ repository }) => {
  return (
    <View style={styles.imageAndInfo}>
      <Image style={styles.avatar} source={{ uri: repository.ownerAvatarUrl }} />
      <View style={styles.info}>
        <Text fontWeight='bold'>{repository.fullName}</Text>
        <Text style={styles.description}>{repository.description}</Text>
        <Text style={styles.language}>{repository.language}</Text>
      </View>
    </View>
  )
}

const KeyNumber = ({ label, value }) => {
  const formattedValue = value < 1000 ? value : `${(value / 1000).toFixed(1)}k`
  return (
    <View style={styles.keyNumber}>
      <Text fontWeight='bold'>{formattedValue}</Text>
      <Text>{label}</Text>
    </View>
  )
}

const KeyNumbers = ({ repository }) => {
  return (
    <View style={styles.keyNumbers}>
      <KeyNumber label='Stars' value={repository.stargazersCount} />
      <KeyNumber label='Forks' value={repository.forksCount} />
      <KeyNumber label='Reviews' value={repository.reviewCount} />
      <KeyNumber label='Rating' value={repository.ratingAverage} />
    </View>
  )
}

const ReposiToryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <ImageAndInfo repository={repository} />
      <KeyNumbers repository={repository} />
    </View>
  )
}

export default ReposiToryItem