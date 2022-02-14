import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { Card } from './index'

describe('Card tests', () => {
  it('should render the Card correctly', async () => {
    const onClickMock = jest.fn()

    const { container, findByText } = render(
      <Card
        className="my-card"
        title="Title"
        data="Data"
        Image=""
        footerComponent={<div>Footer</div>}
        onClick={onClickMock}
      />,
    )

    fireEvent.click(container.firstElementChild as Element)

    expect(container.firstChild).toBeVisible()
    expect(container.firstChild).toHaveClass('my-card')

    expect(await findByText('Title')).toBeVisible()
    expect(await findByText('Data')).toBeVisible()
    expect(await findByText('Footer')).toBeVisible()
    expect(await findByText('Icon')).toBeVisible()

    expect(onClickMock).toBeCalledTimes(1)
  })
})
