import styled from 'styled-components'

import { SIZES } from 'src/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-top: ${SIZES.PADDING_HEIGHT};

  min-height: 100%;
  min-width: 100%;
  background-color: ${(props) => props.theme.background};
`
