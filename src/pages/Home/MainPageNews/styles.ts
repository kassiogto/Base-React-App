import styled from 'styled-components'

export const Container = styled.div`
  max-width: 80%;
  margin-bottom: 2rem;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.snow};

  @media (max-width: 1263px) {
    figure {
      display: none;
    }
  }
`

export const ContentSlide = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
`

export const ContentNotices = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  padding: 1rem;
  height: 60rem;

  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.4;
  }
`
export const ContentList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding-left: 4rem;
`
export const ItemList = styled.div`
  flex: 1;
  font-size: 1.8rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  a {
    text-decoration: none;

    color: ${(props) => props.theme.primaryText};
  }
`

export const ContentNews = styled.figure`
  display: inline-block;
  position: relative;
  margin: 0;
  flex: 2;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.3rem;
  }

  figcaption {
    border-radius: 0.3rem;
    position: absolute;
    display: block;

    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem;

    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.7);

    h2 {
      color: #fff;
      font-size: 2.3rem;
      font-weight: 600;
      line-height: 1.4;
    }

    h2:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  footer {
    display: flex;
    align-items: center;

    height: 13%;
    width: 100%;
    padding: 3rem;

    position: absolute;
    bottom: 0%;

    border-radius: 0.3rem;
    box-sizing: border-box;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 1685px) {
    figcaption {
      font-size: 2.2rem;
      font-weight: 600;
      line-height: 1.4;
    }
  }
  @media (max-width: 1418px) {
    figcaption {
      font-size: 2.2rem;
      font-weight: 600;
      line-height: 1.4;
    }
  }
`

export const TitleNews = styled.a`
  text-decoration: none;

  font-size: 2rem;
  font-weight: 600;

  padding-right: 4rem;
  border-right: 1px solid #fff;
  color: ${(props) => props.theme.warning};
  &:hover {
    text-decoration: underline;
  }
`
export const Date = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;

  margin-left: 2rem;
`
