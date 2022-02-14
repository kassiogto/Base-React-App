import styled from 'styled-components'

import { Card } from 'src/components'

export const Container = styled.div`
  display: flex;

  max-width: 80%;
  margin-bottom: 2rem;
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 80%;

  justify-content: center;
  display: flex;

  border-radius: 0.3rem;
`

export const CardNews = styled(Card)`
  flex: 1;

  min-width: 30rem;
  max-width: 30rem;
  margin: 1rem;

  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.snowDark};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
