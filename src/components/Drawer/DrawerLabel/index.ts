import styled from 'styled-components'

import { NoWrapEllipsis } from 'src/styles'

export const DrawerLabel = styled.div`
  ${NoWrapEllipsis};

  padding: 0 2.4rem;

  color: ${(props) => props.theme.secondaryText};
  font-size: 1.3rem;
`
