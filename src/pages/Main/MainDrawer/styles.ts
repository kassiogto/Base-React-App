import styled, { css } from 'styled-components'

import { DrawerMenu } from 'src/components'
import { DefaultScrollBar } from 'src/styles'

type DrawerProps = {
  isShowingDrawer: boolean
  isResponsiveMode: boolean
}

export const MainDrawerMenu = styled(DrawerMenu)<DrawerProps>`
  ${DefaultScrollBar};

  grid-area: drawer;

  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100vh;

  ${(props) => {
    if (props.isResponsiveMode) {
      return css`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;

        z-index: 2;

        width: 30rem;

        transition: transform 0.2s ease-in;
        transform: translateX(${props.isShowingDrawer ? 0 : -30}rem);
      `
    } else {
      return css`
        transition: width 0.2s ease-in;
        width: ${props.isShowingDrawer ? 30 : 0}rem;
      `
    }
  }}
`

export const DrawerBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background: rgba(0, 0, 0, 0.7);

  z-index: 1;
`
