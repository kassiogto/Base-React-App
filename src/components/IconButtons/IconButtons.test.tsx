import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { LIGHT_THEME } from 'src/styles'

import {
  IconButton,
  RoundIconButton,
  NoRadiusIconButton,
  DangerRoundIconButton,
  DEFAULT_SIZE,
} from './index'

describe('IconButtons tests', () => {
  it('should render the IconButton correctly', () => {
    const onClickMock = jest.fn()

    const { container } = render(
      <IconButton theme={LIGHT_THEME} onClick={onClickMock}>
        <i>Icon</i>
      </IconButton>,
    )

    if (container.firstElementChild)
      fireEvent.click(container.firstElementChild)

    expect(onClickMock).toBeCalled()
    expect(container.firstChild).toBeVisible()

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      overflow: 'hidden',
      cursor: 'pointer',
      width: `${DEFAULT_SIZE}rem`,
      height: `${DEFAULT_SIZE}rem`,
      'font-size': `${DEFAULT_SIZE / 2}rem`,
    })
  })

  it('should be disabled and have a custom size', () => {
    const CUSTOM_SIZE = 5

    const { container } = render(
      <IconButton theme={LIGHT_THEME} size={CUSTOM_SIZE} disabled>
        <i>Icon</i>
      </IconButton>,
    )

    expect(container.firstChild).toHaveStyle({
      width: `${CUSTOM_SIZE}rem`,
      height: `${CUSTOM_SIZE}rem`,
      'font-size': `${CUSTOM_SIZE / 2}rem`,
      'pointer-events': 'none',
    })
  })

  it('should the RoundIconButton be round', () => {
    const { container } = render(
      <RoundIconButton theme={LIGHT_THEME}>
        <i>Icon</i>
      </RoundIconButton>,
    )

    expect(container.firstChild).toHaveStyle({
      'border-radius': '100%',
    })
  })

  it('should the NoRadiusIconButton does not have border-radius', () => {
    const { container } = render(
      <NoRadiusIconButton theme={LIGHT_THEME}>
        <i>Icon</i>
      </NoRadiusIconButton>,
    )

    expect(container.firstChild).toHaveStyle({
      'border-radius': '0',
    })
  })

  it('should the DangerRoundIconButton uses the danger color', () => {
    const { container } = render(
      <DangerRoundIconButton theme={LIGHT_THEME}>
        <i>Icon</i>
      </DangerRoundIconButton>,
    )

    expect(container.firstChild).toHaveStyle({
      background: LIGHT_THEME.danger,
      color: 'white',
    })
  })
})
