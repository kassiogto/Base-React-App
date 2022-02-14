import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { LIGHT_THEME } from 'src/styles'

import { Button } from './index'

describe('Buttons tests', () => {
  it('should render the Button correctly', async () => {
    const onClickMock = jest.fn()

    const { container, findByRole } = render(
      <Button theme={LIGHT_THEME} onClick={onClickMock}>
        ButtonText
      </Button>,
    )

    expect(container.firstChild).toBeVisible()
    expect(container.firstChild).toHaveTextContent('ButtonText')
    expect(container.firstChild).toHaveAttribute('type', 'button')

    fireEvent.click(await findByRole('button'))
    expect(onClickMock).toBeCalled()

    expect(container.firstChild).toHaveStyle({
      outline: 'none',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'font-weight': 'bold',
      'user-select': 'none',
    })
  })

  it('should be disabled and translucent', async () => {
    const onClickMock = jest.fn()

    const { container, findByRole } = render(
      <Button theme={LIGHT_THEME} onClick={onClickMock} disabled>
        ButtonText
      </Button>,
    )

    fireEvent.click(await findByRole('button'))
    expect(onClickMock).not.toBeCalled()

    expect(container.firstChild).toHaveStyle({
      'pointer-events': 'none',
      opacity: '0.6',
    })
  })
})
