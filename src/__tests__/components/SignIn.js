import { render, screen, fireEvent, waitFor } from '@testing-library/react-native'
import { SignInFormContainer } from '../../components/SignIn'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn()
      render(<SignInFormContainer onSubmit={onSubmit} />)
      const usernameInput = screen.getByPlaceholderText('Username')
      const passwordInput = screen.getByPlaceholderText('Password')
      const submitButton = screen.getByText('Sign in')
      fireEvent.changeText(usernameInput, 'kalle')
      fireEvent.changeText(passwordInput, 'password')
      fireEvent.press(submitButton)

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        })
      })
    })
  })
})