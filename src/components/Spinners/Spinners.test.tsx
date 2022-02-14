import React from 'react'
import { render } from '@testing-library/react'

import { LIGHT_THEME } from 'src/styles'

import { Spinner, WhiteSpinner } from './index'

describe('Spinners tests', () => {
  it('should render the Spinner correctly', () => {
    const { container } = render(
      <Spinner
        theme={LIGHT_THEME}
        color={LIGHT_THEME.primaryText}
        ringColor="rgba(0,0,0,0.1)"
        background="transparent"
        thickness={2}
        size="1rem"
      />,
    )

    expect(container.firstChild).toBeVisible()
    expect(container.firstChild).toHaveStyle({
      background: 'transparent',
      width: '1rem',
      height: '1rem',
      'border-radius': '50%',
      'border-top': '2px solid rgba(0,0,0,0.1)',
      'border-right': '2px solid rgba(0,0,0,0.1)',
      'border-bottom': '2px solid rgba(0,0,0,0.1)',
      'border-left': `2px solid ${LIGHT_THEME.primaryText}`,
    })
  })

  it('should render the WhiteSpinner correctly', () => {
    const { container } = render(<WhiteSpinner theme={LIGHT_THEME} />)

    expect(container.firstChild).toHaveStyle({
      'border-top': '2px solid rgba(255,255,255,0.1)',
      'border-right': '2px solid rgba(255,255,255,0.1)',
      'border-bottom': '2px solid rgba(255,255,255,0.1)',
      'border-left': '2px solid white',
    })
  })
})
