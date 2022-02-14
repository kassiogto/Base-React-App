import React from 'react'
import { render } from '@testing-library/react'

import { LightThemeWrapper } from 'src/tests'

import { EmptyMessage } from './index'

describe('EmptyMessage tests', () => {
  it('should render the EmptyMessage correctly', async () => {
    const { container, findByText } = render(
      <EmptyMessage
        className="empty-message-class"
        iconComponent={<i>Icon</i>}
        message="Message"
      >
        <div>Children</div>
      </EmptyMessage>,
      { wrapper: LightThemeWrapper },
    )

    expect(container.firstChild).toBeVisible()
    expect(container.firstChild).toHaveClass('empty-message-class')

    expect(await findByText('Icon')).toBeVisible()
    expect(await findByText('Message')).toBeVisible()
    expect(await findByText('Children')).toBeVisible()
  })
})
