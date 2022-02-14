import React from 'react'
import { render } from '@testing-library/react'

import { LIGHT_THEME } from 'src/styles'

import { DefaultLabel } from './index'

describe('Label tests', () => {
  it('should render the Label correctly', () => {
    const { container, getByText } = render(
      <DefaultLabel theme={LIGHT_THEME}>Label</DefaultLabel>,
    )

    expect(container.firstChild).toBeVisible()
    expect(getByText('Label')).toBeVisible()

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'align-items': 'center',
    })
  })
})
