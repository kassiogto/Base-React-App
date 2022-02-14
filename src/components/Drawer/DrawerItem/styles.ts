import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { NoWrapEllipsis } from 'src/styles'

type ContainerProps = {
  selected: boolean
}

type TextProps = {
  hasIcon: boolean
  hasBadge: boolean
}

export const Container = styled(Link)<ContainerProps>`
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};

  outline: none;

  display: flex;
  align-items: center;

  padding: 0 2.4rem;
  height: 4.8rem;
  min-height: 4.8rem;
  max-height: 4.8rem;

  cursor: pointer;
  user-select: none;
  transition: background 0.1s ease-in, color 0.1s ease-in;

  ${(props) => {
    if (props.selected) {
      return css`
        pointer-events: none;
        background: ${props.theme.accent};
        color: white;
      `
    }

    return css`
      &:hover,
      &:focus {
        background: ${(props) => props.theme.hover};
      }
    `
  }}
`

export const Text = styled.div<TextProps>`
  ${NoWrapEllipsis}

  flex: 1;

  padding-left: ${(props) => (props.hasIcon ? 1.6 : 0)}rem;
  padding-right: ${(props) => (props.hasBadge ? 1.6 : 0)}rem;
`
