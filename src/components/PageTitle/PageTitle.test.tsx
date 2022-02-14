import React from 'react'
import { render } from '@testing-library/react'

import { LightThemeWrapper } from 'src/tests'

import { PageTitle } from './index'

describe('PageTitle tests', () => {
  it('should render the PageTitle correctly', () => {
    const { container, getByText } = render(
      <PageTitle
        title="Title"
        subtitle="Subtitle"
        iconComponent={<i>Icon</i>}
        className="page-title-class"
      />,
      { wrapper: LightThemeWrapper },
    )

    expect(container.firstChild).toBeVisible()
    expect(container.firstChild).toHaveClass('page-title-class')

    expect(getByText('Title')).toBeVisible()
    expect(getByText('Subtitle')).toBeVisible()
    expect(getByText('Icon')).toBeVisible()

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'align-items': 'center',
    })

    expect(getByText('Title')).toHaveStyle({
      'font-weight': '900',
    })
  })
})
