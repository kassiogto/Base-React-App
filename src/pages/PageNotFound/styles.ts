import styled from 'styled-components'

import { Button } from 'src/components'

export const Container = styled.div`
  min-height: 100%;

  padding: 3.2rem;

  background: linear-gradient(
    90deg,
    ${(props) => props.theme.danger},
    ${(props) => props.theme.dangerDark}
  );

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 60rem;
  max-width: 60rem;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 6rem;
  font-weight: 900;
`

export const Subtitle = styled.h2`
  margin: 0 0 4.8rem 0;
  font-weight: normal;
`

export const BackButton = styled(Button)`
  background: white;

  span {
    margin: 0 0 0 1.6rem;
  }
`
