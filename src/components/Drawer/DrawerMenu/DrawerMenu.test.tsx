import React from 'react'
import { render } from '@testing-library/react'

import { LightThemeWrapper } from 'src/tests'

import DrawerMenu from './index'

describe('DrawerMenu tests', () => {
  it('should render the DrawerMenu correctly', async () => {
    const { container, findByText } = render(
      <DrawerMenu
        className="drawer-menu-class"
        headerComponent={<div>Header</div>}
        footerComponent={<div>Footer</div>}
      >
        <div>Content</div>
      </DrawerMenu>,
      {
        wrapper: LightThemeWrapper,
      },
    )

    expect(container.firstChild).toBeVisible()
    expect(container.firstChild).toHaveClass('drawer-menu-class')

    expect(await findByText('Header')).toBeVisible()
    expect(await findByText('Content')).toBeVisible()
    expect(await findByText('Footer')).toBeVisible()

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'flex-direction': 'column',
    })
  })
})
