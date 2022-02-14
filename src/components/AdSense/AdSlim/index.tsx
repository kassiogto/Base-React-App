import React from 'react'

import { Container } from './styles'

interface AdSlimProps {
  usuario_codigo: React.ReactNode
}

const AdSlim: React.FC<AdSlimProps> = (props) => {
  const { children } = props
  return <Container> {children} </Container>
}

export default AdSlim
