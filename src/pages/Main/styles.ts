import styled from 'styled-components'

import { DefaultScrollBar, SIZES } from 'src/styles'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'drawer content';
  grid-template-rows: 1fr;
  grid-template-columns: min-content 1fr;

  height: 100%;
`

export const Content = styled.main`
  ${DefaultScrollBar};

  grid-area: content;

  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  background: ${(props) => props.theme.snowDark};
`

export const RoutesContainer = styled.div`
  height: calc(100% - ${SIZES.NAVBAR_HEIGHT});
  min-height: calc(100% - ${SIZES.NAVBAR_HEIGHT});
`
