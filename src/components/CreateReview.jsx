import { View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import useCreateReview from '../hooks/useCreateReview'

import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'
import theme from '../theme'
import Button from './Button'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
  }
})

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owener is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number().integer().min(0).max(100).required('Rating is required'),
  text: yup.string().optional()
})

const ReviewForm = ({ onSubmit }) => (
  <View style={styles.container}>
    <FormikTextInput name='ownerName' placeholder='Repository owner name' />
    <FormikTextInput name='repositoryName' placeholder='Repository name' />
    <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
    <FormikTextInput name='text' placeholder='Review' multiline />
    <Button onPress={onSubmit} text='Create review' />
  </View>
)

const CreateReview = () => {

  const [ createReview ] = useCreateReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    try {
      const review = { ...values, rating: Number(values.rating)}
      const { data } = await createReview(review)
      navigate(`/${data.createReview.repositoryId}`)
    } catch (error) {
      console.log('error in submit', error)
    }
  }
  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
  }

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {(props) => <ReviewForm onSubmit={props.handleSubmit} />}
    </Formik>
  )
}

export default CreateReview