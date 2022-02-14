import styled, { css } from 'styled-components'

import {
  ModalBackdrop,
  ModalDialog,
  ModalHeader,
} from 'src/components/ModalParts'
import { Button, SuccessButton } from 'src/components/Buttons'
import { DefaultScrollBar } from 'src/styles'

type ConfirmButtonProps = {
  buttonType: 'danger' | 'success'
}

export const Backdrop = styled(ModalBackdrop)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  overflow-y: auto;
  ${DefaultScrollBar};
`

export const Dialog = styled(ModalDialog)``

export const Header = styled(ModalHeader)`
  background: ${(props) => props.theme.snow};
`

export const Body = styled.div`
  padding: 2.4rem;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 1.6rem;
`

export const ConfirmButton = styled(SuccessButton)<ConfirmButtonProps>`
  height: 4.8rem;

  margin-left: 0.8rem;

  ${(props) => {
    if (props.buttonType === 'danger') {
      return css`
        background: ${props.theme.danger};

        &:hover,
        &:focus {
          background: ${props.theme.dangerDark};
        }
      `
    } else if (props.buttonType === 'success') {
      return null
    }
  }}

  span {
    margin: 0;
  }
`

export const CancelButton = styled(Button)`
  height: 4.8rem;

  margin-right: 0.8rem;

  span {
    margin: 0;
  }
`
