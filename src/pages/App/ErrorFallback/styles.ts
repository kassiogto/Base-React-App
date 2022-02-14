import styled from 'styled-components'

import { Button } from 'src/components'

export const Container = styled.div`
  min-height: 100%;
  max-width: 50rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
  padding: 1.6rem;
`

export const IconContainer = styled.div`
  color: ${(props) => props.theme.danger};
  font-size: 15rem;

  height: 15rem;
  width: 15rem;

  margin-bottom: 2.4rem;
`

export const Title = styled.div`
  margin-bottom: 0.8rem;

  color: ${(props) => props.theme.danger};
  font-size: 2.4rem;
  font-weight: 900;
`

export const Message = styled.div`
  margin-bottom: 3.2rem;
`

export const TryAgainButton = styled(Button)``
