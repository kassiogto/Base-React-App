import React from 'react'
import { render } from '@testing-library/react'

import { LightThemeWrapper } from 'src/tests'

import { Input } from './index'

describe('Input tests', () => {
  it('should render the Input correctly', () => {
    const { container, getByText } = render(
      <Input
        className="input-class"
        labelComponent={<span>Label</span>}
        inputComponent={<span>Input</span>}
        errorComponent={<span>Error</span>}
        iconComponent={<span>Icon</span>}
        actionComponent={<span>Action</span>}
        showAction
        showError
        showLabel
      />,
      {
        wrapper: LightThemeWrapper,
      },
    )

    expect(container.firstChild).toBeVisible()
    expect(container.firstChild).toHaveClass('input-class')

    expect(getByText('Label')).toBeVisible()
    expect(getByText('Input')).toBeVisible()
    expect(getByText('Error')).toBeVisible()
    expect(getByText('Icon')).toBeVisible()
    expect(getByText('Action')).toBeVisible()
  })
})
