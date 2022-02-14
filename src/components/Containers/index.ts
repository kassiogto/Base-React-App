import styled from 'styled-components'

export const PageContainer = styled.div`
  padding: 2.4rem;

  @media only screen and (max-width: 900px) {
    padding: 1.6rem;
  }

  @media only screen and (max-width: 480px) {
    padding: 1.6rem 0.8rem;
  }
`

export const FullHeightSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`
