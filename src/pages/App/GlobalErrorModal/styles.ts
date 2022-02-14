import styled from 'styled-components'

import {
  ModalBackdrop,
  ModalDialog,
  ModalHeader,
  RoundIconButton,
  Button,
} from 'src/components'

export const Backdrop = styled(ModalBackdrop)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Dialog = styled(ModalDialog)``

export const Header = styled(ModalHeader)`
  color: ${(props) => props.theme.contrastPrimaryText};
  background: ${(props) => props.theme.danger};
`

export const Body = styled.div`
  padding: 2.4rem 2.4rem 1.6rem 2.4rem;
`

export const ErrorItem = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.8rem;

  span {
    margin-left: 1.6rem;
  }
`

export const Footer = styled.div``

export const CloseButton = styled(RoundIconButton)``

export const ConfirmButton = styled(Button)`
  border-radius: 0;
`
