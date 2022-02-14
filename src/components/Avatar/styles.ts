import styled, { css } from 'styled-components'

import { Initials } from 'src/components'

export const AVATAR_SIZE = '5rem'

const Style = css`
  width: ${AVATAR_SIZE};
  height: ${AVATAR_SIZE};
  border-radius: ${AVATAR_SIZE};
`

export const Image = styled.img`
  ${Style};
`

export const NameInitials = styled(Initials)`
  background: ${(props) => props.theme.snowLight} !important;

  ${Style};
`
