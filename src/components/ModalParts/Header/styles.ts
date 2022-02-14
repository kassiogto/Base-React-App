import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.6rem;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme.primaryText};
  background: ${(props) => props.theme.snowDark};
`

export const Content = styled.div`
  flex: 1;

  padding: 0 1.6rem;
`

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 900;
`

export const Subtitle = styled.div``
