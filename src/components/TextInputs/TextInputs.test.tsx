import React from 'react'
import { render } from '@testing-library/react'

import { LIGHT_THEME } from 'src/styles'

import { DefaultInput } from './index'

describe('TextInputs tests', () => {
  it('should render the DefaultInput correctly', () => {
    const { container } = render(<DefaultInput theme={LIGHT_THEME} />)
    expect(container.firstChild).toBeVisible()
  })
})
