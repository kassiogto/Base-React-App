import styled, { css } from 'styled-components'

import { NoWrapEllipsis } from 'src/styles'

export const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  ${NoWrapEllipsis};

  height: 5.6rem;
  width: 100%;

  outline: none;
  border: none;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 1.8rem;

  padding: 0 1.6rem;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;

  background: ${(props) => props.theme.snow};
  color: ${(props) => props.theme.primaryText};

  ${(props) => {
    if (props.disabled) {
      return css`
        pointer-events: none;
        opacity: 0.6;
      `
    }
  }}

  &:hover,
  &:focus {
    background: ${(props) => props.theme.snowDark};
  }

  span {
    margin-right: 1.6rem;
  }
`

export const OutlinedButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.primaryText};
  background: transparent;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.snow};
  }
`

export const DangerButton = styled(Button)`
  background: ${(props) => props.theme.danger};
  color: white;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.dangerDark};
  }
`

export const SuccessButton = styled(Button)`
  background: ${(props) => props.theme.success};
  color: white;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.successDark};
  }
`

export const AccentButton = styled(Button)`
  background: ${(props) => props.theme.accent};
  color: white;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.accentDark};
  }
`

export const SmallButton = styled(Button)`
  height: 4rem;
`

export const SmallOutlinedButton = styled(OutlinedButton)`
  height: 4rem;
`

export const SmallDangerButton = styled(DangerButton)`
  height: 4rem;
`

export const SmallSuccessButton = styled(SuccessButton)`
  height: 4rem;
`

export const SmallAccentButton = styled(AccentButton)`
  height: 4rem;
`
