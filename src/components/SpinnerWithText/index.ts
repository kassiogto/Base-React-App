import styled from 'styled-components'

export interface SpinnerWithTextProps {
  hasSpinnerOnTheLeft?: boolean
  hasSpinnerOnTheRight?: boolean
}

export const SpinnerWithText = styled.div<SpinnerWithTextProps>`
  display: flex;
  align-items: center;

  span {
    margin-right: ${(props) => (props.hasSpinnerOnTheRight ? 1.6 : 0)}rem;
    margin-left: ${(props) => (props.hasSpinnerOnTheLeft ? 1.6 : 0)}rem;
  }
`
