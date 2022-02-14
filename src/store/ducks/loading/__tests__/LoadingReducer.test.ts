import { LoadingReducer } from '../reducer'
import { LoadingState } from '../types'
import { addLoading, removeLoading } from '../actions'

describe('Loading reducer tests', () => {
  const fakeEmptyState: LoadingState = {
    loading: {},
  }

  const fakeState: LoadingState = {
    loading: {
      firstTest: true,
      secondTest: true,
    },
  }

  it('should add loading flags to the loadingState', () => {
    const newState = LoadingReducer(
      fakeEmptyState,
      addLoading('firstTest', 'secondTest'),
    )

    expect(newState).toEqual(fakeState)
  })

  it('should remove loading flags from the loadingState', () => {
    const newState = LoadingReducer(
      fakeState,
      removeLoading('firstTest', 'secondTest'),
    )

    expect(newState).toEqual(fakeEmptyState)
  })
})
