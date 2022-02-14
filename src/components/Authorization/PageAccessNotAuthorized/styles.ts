import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 60rem;

  padding: 3.2rem;
  margin: 2.4rem;

  border-radius: 1rem;

  background: linear-gradient(
    90deg,
    ${(props) => props.theme.danger},
    ${(props) => props.theme.dangerDark}
  );

  color: white;
`

export const IconContainer = styled.div`
  font-size: 10rem;
  width: 10rem;
  height: 10rem;

  margin-bottom: 1.6rem;
`

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 900;

  margin-bottom: 0.4rem;
`

export const Message = styled.div`
  font-size: 1.8rem;
`
