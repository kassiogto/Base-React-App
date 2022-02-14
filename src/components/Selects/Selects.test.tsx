import React from 'react'
import { render } from '@testing-library/react'

import { LightThemeWrapper } from 'src/tests'

import { SnowSelect } from './index'

describe('Selects tests', () => {
  it('should render the SnowSelect correctly', () => {
    const { container } = render(<SnowSelect />, {
      wrapper: LightThemeWrapper,
    })

    expect(container.firstChild).toBeVisible()
  })
})
