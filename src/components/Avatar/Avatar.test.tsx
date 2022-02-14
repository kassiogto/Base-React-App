import React from 'react'
import { render } from '@testing-library/react'

import { LightThemeWrapper } from 'src/tests'

import { AVATAR_SIZE } from './styles'

import { Avatar } from './index'

describe('Avatar tests', () => {
  it('should render with an image correctly', () => {
    const { container } = render(
      <Avatar src="/assets/image.jpg" alt="Logo" className="my-avatar" />,
      {
        wrapper: LightThemeWrapper,
      },
    )

    expect(container.firstChild).toHaveAttribute('src')
    expect(container.firstChild).toHaveAttribute('alt', 'Logo')
    expect(container.firstChild).toHaveClass('my-avatar')

    expect(container.firstChild).toHaveStyle({
      height: AVATAR_SIZE,
      width: AVATAR_SIZE,
      'border-radius': AVATAR_SIZE,
    })
  })

  it('should render with the initials correctly', async () => {
    const { container, findByText } = render(
      <Avatar alt="User Name" className="my-avatar" />,
      {
        wrapper: LightThemeWrapper,
      },
    )

    expect(await findByText('UN')).toBeVisible()

    expect(container.firstChild).not.toHaveAttribute('src')
    expect(container.firstChild).not.toHaveAttribute('alt')
    expect(container.firstChild).toHaveClass('my-avatar')

    expect(container.firstChild).toHaveStyle({
      height: AVATAR_SIZE,
      width: AVATAR_SIZE,
      'border-radius': AVATAR_SIZE,
    })
  })
})
