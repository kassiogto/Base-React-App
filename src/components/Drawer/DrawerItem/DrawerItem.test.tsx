import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { LightThemeWrapper } from 'src/tests'

import DrawerItem from './index'

describe('DrawerItem tests', () => {
  it('should render the DrawerItem correctly', async () => {
    const { container, findByText } = render(
      <Router>
        <DrawerItem
          text="Text"
          to="/route"
          badgeComponent={<div>Badge</div>}
          iconComponent={<i>Icon</i>}
          className="drawer-item-class"
          selected
        />
      </Router>,
      { wrapper: LightThemeWrapper },
    )

    const linkElement = container.querySelector('.drawer-item-class')

    expect(linkElement).toBeVisible()
    expect(linkElement).toHaveClass('drawer-item-class')
    expect(linkElement).toHaveAttribute('href', '/route')

    expect(await findByText('Icon')).toBeVisible()
    expect(await findByText('Text')).toBeVisible()
    expect(await findByText('Badge')).toBeVisible()

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'align-items': 'center',
      cursor: 'pointer',
      'user-select': 'none',
      outline: 'none',
      'text-decoration': 'none',
    })
  })
})
