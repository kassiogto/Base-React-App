import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

import { LIGHT_THEME } from 'src/styles'

export const DefaultTooltip = styled(ReactTooltip).attrs((props) => ({
  type: props.theme.id === LIGHT_THEME.id ? 'dark' : 'light',
  effect: 'solid',
}))``
