import React from 'react'
import { render } from '@testing-library/react'

import { LIGHT_THEME } from 'src/styles'

import { SpinnerWithText } from './index'

describe('SpinnerWithText tests', () => {
  it('should render the SpinnerWithText correctly', () => {
    const { container, getByText } = render(
      <SpinnerWithText theme={LIGHT_THEME}>
        <div>Spinner</div>
        <span>Text</span>
      </SpinnerWithText>,
    )

    expect(container.firstChild).toBeVisible()
    expect(getByText('Spinner')).toBeVisible()
    expect(getByText('Text')).toBeVisible()

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'align-items': 'center',
    })
  })
})
