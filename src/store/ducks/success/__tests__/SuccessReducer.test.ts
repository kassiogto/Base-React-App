import { SuccessReducer } from '../reducer'
import { SuccessState } from '../types'
import {
  hideSuccess,
  hideSuccessToast,
  showSuccess,
  showSuccessToast,
} from '../actions'

describe('SuccessReducer tests', () => {
  const fakeState: SuccessState = {
    success: {},
    toast: {
      duration: 8000,
      isShowing: false,
      messageCode: 'default',
    },
  }

  const fakeStateWithSuccess: SuccessState = {
    ...fakeState,
    success: {
      testing: true,
    },
  }

  const fakeStateWithToast: SuccessState = {
    ...fakeState,
    toast: {
      ...fakeState.toast,
      isShowing: true,
    },
  }

  it('should add a success in the state', () => {
    const newState = SuccessReducer(fakeState, showSuccess('testing'))

    expect(newState).toEqual({
      ...fakeState,
      success: {
        testing: true,
      },
    })
  })

  it('should remove the success fom state', () => {
    const newState = SuccessReducer(
      fakeStateWithSuccess,
      hideSuccess('testing'),
    )

    expect(newState).toEqual(fakeState)
  })

  it('should show the toast', () => {
    const newState = SuccessReducer(
      fakeState,
      showSuccessToast({ duration: 6000, messageCode: 'successCode' }),
    )

    expect(newState).toEqual({
      ...fakeState,
      toast: {
        duration: 6000,
        isShowing: true,
        messageCode: 'successCode',
      },
    })
  })

  it('should hide the toast', () => {
    const newState = SuccessReducer(fakeStateWithToast, hideSuccessToast())

    expect(newState).toEqual({
      ...fakeStateWithToast,
      toast: {
        ...fakeStateWithToast.toast,
        isShowing: false,
      },
    })
  })
})
