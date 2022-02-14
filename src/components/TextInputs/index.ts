import styled, { css } from 'styled-components'
import InputMask from 'react-input-mask'

const DefaultInputStyles = css<{ disabled?: boolean }>`
  border: none;
  outline: none;
  background: transparent;
  padding: 0 1.6rem;
  height: 4.8rem;
  width: 100%;

  color: ${(props) => props.theme.primaryText};
  background: ${(props) =>
    props.disabled ? props.theme.disabled : 'transparent'};
`

const BorderedInputStyles = css`
  ${DefaultInputStyles};

  border: 1px solid ${(props) => props.theme.border};
  border-radius: 1rem;

  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: ${(props) => props.theme.secondaryText};
  }
`

const SnowInputStyles = css`
  ${DefaultInputStyles};

  background: ${(props) => props.theme.snow};
  border-radius: 1rem;

  transition: background 0.2s ease-in-out;

  &:focus {
    background: ${(props) => props.theme.snowDark};
  }
`

export const DefaultInput = styled.input`
  ${DefaultInputStyles};
`

export const BorderedInput = styled.input`
  ${BorderedInputStyles}
`

export const SnowInput = styled.input`
  ${SnowInputStyles}
`

export const DefaultInputMask = styled(InputMask)`
  ${DefaultInputStyles};
`

export const BorderedInputMask = styled(InputMask)`
  ${BorderedInputStyles}
`

export const SnowInputMask = styled(InputMask)`
  ${SnowInputStyles}
`
