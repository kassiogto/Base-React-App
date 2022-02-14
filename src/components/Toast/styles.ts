import styled from 'styled-components'

import { NoWrapEllipsis } from 'src/styles'

type TextProps = {
  hasIcon: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${(props) => props.theme.primaryText};
  color: white;

  border-radius: 1rem;

  min-width: 20rem;
  height: 3.6rem;

  padding: 0 1.6rem;

  font-weight: bold;

  user-select: none;
`

export const Text = styled.div<TextProps>`
  margin-left: ${(props) => (props.hasIcon ? 1.6 : 0)}rem;
  flex: 1;
  ${NoWrapEllipsis};
`
