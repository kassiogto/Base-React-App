import React from 'react'

import { Container, Cards, CardNews } from './styles'

const PostCardNews: React.FC = () => {
  return (
    <Container>
      <Cards>
        <CardNews
          key="1"
          title="NEGÓCIOS"
          data="M. Dias Branco (MDIA3) pagará R$ 588,2 milhões em JCP; veja o valor por ação"
        />
        <CardNews
          key="1"
          title="NEGÓCIOS"
          data="M. Dias Branco (MDIA3) pagará R$ 588,2 milhões em JCP; veja o valor por ação"
        />
        <CardNews
          key="1"
          title="NEGÓCIOS"
          data="M. Dias Branco (MDIA3) pagará R$ 588,2 milhões em JCP; veja o valor por ação"
        />
        <CardNews
          key="1"
          title="COLUNISTAS"
          data="M. Dias Branco (MDIA3) pagará R$ 588,2 milhões em JCP; veja o valor por ação"
        />
        <CardNews
          key="1"
          title="NEGÓCIOS"
          data="Ibovespa avança e tem 4ª semana de altas; Vale (VALE3) e Petrobras (PETR4) sobem"
        />
        <CardNews
          key="1"
          title="COLUNISTAS"
          data="O futuro financeiro é embarcado
"
        />
      </Cards>
    </Container>
  )
}

export default PostCardNews
