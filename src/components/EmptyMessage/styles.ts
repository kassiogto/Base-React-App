import styled from 'styled-components'

export const Container = styled.div`
  max-width: 40rem;

  text-align: center;
  color: ${(props) => props.theme.secondaryText};
`

export const IconContainer = styled.div`
  font-size: 10rem;
  color: ${(props) => props.theme.border};

  width: 10rem;
  height: 10rem;

  margin: 0 auto 1.6rem auto;
`

export const Message = styled.div`
  margin-bottom: 1.6rem;
`
