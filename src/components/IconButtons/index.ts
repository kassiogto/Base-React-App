import styled, { css } from 'styled-components'

export interface IconButtonProps {
  disabled?: boolean
  size?: number
}

export const DEFAULT_SIZE = 4

export const IconButton = styled.div<IconButtonProps>`
  width: ${(props) => props.size || DEFAULT_SIZE}rem;
  height: ${(props) => props.size || DEFAULT_SIZE}rem;
  font-size: ${(props) => (props.size ? props.size / 2 : DEFAULT_SIZE / 2)}rem;

  border-radius: 1rem;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background 0.2s ease-in-out;

  ${(props) => {
    if (props.disabled) {
      return css`
        pointer-events: none;
        background: ${(props) => props.theme.disabled};
      `
    }
  }}

  &:hover {
    background: ${(props) => props.theme.hover};
  }
`

export const RoundIconButton = styled(IconButton)`
  border-radius: 100%;
`

export const NoRadiusIconButton = styled(IconButton)`
  border-radius: 0;
`

export const DangerRoundIconButton = styled(RoundIconButton)`
  background: ${(props) => props.theme.danger};
  color: white;

  &:hover {
    background: ${(props) => props.theme.dangerDark};
  }
`
