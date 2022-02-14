import styled from 'styled-components'

export const ModalDialog = styled.div`
  overflow: hidden;

  width: 40%;
  min-width: 36rem;
  max-width: 60rem;

  border-radius: 1rem;

  margin: 2.4rem 0;

  background: ${(props) => props.theme.background};

  @media only screen and (max-width: 360px) {
    min-width: 32rem;
  }
`
