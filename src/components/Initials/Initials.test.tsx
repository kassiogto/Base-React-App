import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { LightThemeWrapper } from 'src/tests'

import { Initials } from './index'

describe('Initials tests', () => {
  it('should render the Initials correctly', () => {
    const onClickMock = jest.fn()

    const { container, getByText } = render(
      <Initials
        text="My Initials"
        onClick={onClickMock}
        className="initials-class"
      />,
      { wrapper: LightThemeWrapper },
    )

    if (container.firstElementChild)
      fireEvent.click(container.firstElementChild)

    expect(onClickMock).toBeCalled()
    expect(container.firstChild).toBeVisible()
    expect(container.firstChild).toHaveClass('initials-class')

    expect(getByText('MI')).toBeVisible()

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'align-items': 'center',
    })
  })
})
