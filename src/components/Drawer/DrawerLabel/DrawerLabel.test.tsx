import React from 'react'
import { render } from '@testing-library/react'

import { LIGHT_THEME } from 'src/styles'

import { DrawerLabel } from './index'

describe('DrawerLabel tests', () => {
  it('should render the DrawerLabel correctly', async () => {
    const { container, findByText } = render(
      <DrawerLabel theme={LIGHT_THEME}>Label</DrawerLabel>,
    )

    expect(container.firstChild).toBeVisible()
    expect(await findByText('Label')).toBeVisible()

    expect(container.firstChild).toHaveStyle({
      overflow: 'hidden',
      'white-space': 'nowrap',
      'text-overflow': 'ellipsis',
    })
  })
})
