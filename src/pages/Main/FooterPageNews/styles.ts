import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  justify-content: center;

  background: ${(props) => props.theme.snowDark};
  width: 100%;
  height: 30rem;
`
export const ContentSlogan = styled.div`
  p {
    padding: 0 0 0.5rem 0.4rem;

    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.5;
  }
`
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  width: 80%;
`

export const DivInitial = styled.div`
  display: flex;
  flex: 2;

  flex-direction: column;
  align-items: flex-start;

  height: 100%;

  padding: 2rem;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  height: 100%;

  padding: 2rem;

  ul {
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;

    list-style: none;

    padding-inline-start: 0;
    height: 100%;
  }

  li:hover {
    color: ${(props) => props.theme.hover};
    cursor: pointer;
  }
`

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  width: 100%;
`

export const IconContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;
  width: 4rem;
  height: 4rem;

  margin: 0 0.6rem 1.6rem 0.2rem;
  border-radius: 0.3rem;

  background: ${(props) => props.theme.snow};
  &:hover {
  }
  cursor: pointer;
`

export const Logo = styled.img`
  height: 3.8rem;
  width: 3.8rem;

  margin-right: 0.6rem;
  border-radius: 50%;
`

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: start;
`
