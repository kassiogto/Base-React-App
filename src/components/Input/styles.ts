import styled from 'styled-components'

type ContentProps = {
  hasIcon: boolean
  hasAction: boolean
}

type InputContainerProps = {
  hasLabel: boolean
  hasError: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Content = styled.div<ContentProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: ${({ hasAction, hasIcon }) => {
    const marginRight = hasAction ? 1.6 : 0
    const marginLeft = hasIcon ? 1.6 : 0
    return `0 ${marginRight}rem 0 ${marginLeft}rem`
  }};
`

export const InputContainer = styled.div<InputContainerProps>`
  margin: ${({ hasLabel, hasError }) => {
    const marginTop = hasLabel ? 0.8 : 0
    const marginBottom = hasError ? 0.8 : 0
    return `${marginTop}rem 0 ${marginBottom}rem 0`
  }};
`
