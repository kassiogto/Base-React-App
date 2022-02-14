import styled from 'styled-components'

import {
  ModalBackdrop,
  ModalDialog,
  ModalHeader,
} from 'src/components/ModalParts'
import { DefaultScrollBar } from 'src/styles'

export const Backdrop = styled(ModalBackdrop)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  overflow-y: auto;
  ${DefaultScrollBar};
`

export const Dialog = styled(ModalDialog)`
  overflow: initial;
`

export const Header = styled(ModalHeader)`
  background: ${(props) => props.theme.snow};

  border-radius: 1rem 1rem 0 0;
`

export const Body = styled.div``
