import React from 'react'

import { Spinner } from '../Spinners'

import { Container } from './styles'

export const Splash: React.FC = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  )
}
