import React from 'react'
import { render } from '@testing-library/react'

import { LightThemeWrapper } from 'src/tests'

import { Splash } from './index'

describe('Splash tests', () => {
  it('should render the Splash correctly', () => {
    const { container } = render(<Splash />, {
      wrapper: LightThemeWrapper,
    })

    expect(container.firstChild).toBeVisible()
    expect(container.firstChild).toHaveStyle({
      height: '100%',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
    })
  })
})
