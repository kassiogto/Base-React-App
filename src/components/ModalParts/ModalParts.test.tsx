import React from 'react'
import { render } from '@testing-library/react'

import { LIGHT_THEME } from 'src/styles'
import { LightThemeWrapper } from 'src/tests'

import { ModalBackdrop, ModalDialog, ModalHeader } from './index'

describe('ModalParts tests', () => {
  it('should render the ModalBackdrop correctly', () => {
    const { container } = render(<ModalBackdrop />)
    expect(container.firstChild).toBeVisible()
    expect(container.firstChild).toHaveStyle({
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      'min-height': '100vh',
      'z-index': 999,
    })
  })

  it('should render the ModalDialog correctly', () => {
    const { container } = render(<ModalDialog theme={LIGHT_THEME} />)
    expect(container.firstChild).toBeVisible()
    expect(container.firstChild).toHaveStyle({
      'max-width': '60rem',
    })
  })

  it('should render the ModalHeader correctly', () => {
    const { container, getByText } = render(
      <ModalHeader
        className="modal-header-class"
        title="Title"
        subtitle="Subtitle"
        iconComponent={<i>Icon</i>}
        closeButtonComponent={<div>CloseButton</div>}
      />,
      { wrapper: LightThemeWrapper },
    )

    expect(container.firstChild).toBeVisible()
    expect(container.firstChild).toHaveClass('modal-header-class')

    expect(getByText('Title')).toBeVisible()
    expect(getByText('Subtitle')).toBeVisible()
    expect(getByText('Icon')).toBeVisible()
    expect(getByText('CloseButton')).toBeVisible()

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'align-items': 'center',
    })
  })
})
