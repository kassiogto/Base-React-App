import { showError, hideError, showServerError } from '../actions'
import { ErrorReducer } from '../reducer'
import { ErrorState } from '../types'

describe('ErrorReducer tests', () => {
  const fakeInitialState: ErrorState = {
    isShowing: false,
  }

  const fakeState: ErrorState = {
    isShowing: true,
    messages: ['First Message', 'Second Message'],
    title: 'Title',
  }

  it('should add a message, title and set isShowing = true', () => {
    const newState = ErrorReducer(
      fakeInitialState,
      showError(['First Message', 'Second Message'], 'Title'),
    )

    expect(newState).toEqual(fakeState)
  })

  it('should add a message from a server transformed message', () => {
    const newState = ErrorReducer(
      fakeInitialState,
      showServerError(
        [
          {
            code: '1',
            fullMessage: '1: Message',
            help: 'Help me',
            message: 'Message',
          },
        ],
        'My Title',
      ),
    )

    expect(newState).toEqual({
      isShowing: true,
      messages: ['1: Message'],
      title: 'My Title',
    })
  })

  it('should hide the error without removing messages and title', () => {
    const newState = ErrorReducer(fakeState, hideError())

    expect(newState).toEqual({
      ...fakeState,
      isShowing: false,
    })
  })
})
