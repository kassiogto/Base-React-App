import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Content = styled.div`
  color: ${(props) => props.theme.secondaryText};
  font-size: 1.8rem;

  flex: 1;
`

export const Title = styled.div`
  color: ${(props) => props.theme.primaryText};
  font-weight: 900;
  font-size: 3.2rem;

  margin-bottom: 0.4rem;
`

export const Subtitle = styled.div``

export const IconContainer = styled.div`
  font-size: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.primaryText};

  margin-right: 2.4rem;

  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 0.8rem;
  }
`
