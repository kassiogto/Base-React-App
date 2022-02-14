import React from 'react'
import { render } from '@testing-library/react'

import { LIGHT_THEME } from 'src/styles'

import { PageContainer, FullHeightSpinnerContainer } from './index'

describe('Containers tests', () => {
  it('should render the PageContainer correctly', () => {
    const { container } = render(<PageContainer theme={LIGHT_THEME} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render the FullHeightSpinnerContainer correctly', () => {
    const { container } = render(<FullHeightSpinnerContainer />)

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      height: '100%',
    })
  })
})
