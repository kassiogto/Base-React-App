import styled from 'styled-components'

import { Avatar } from 'src/components'
import { NoWrapEllipsis } from 'src/styles'

export const Container = styled.div`
  padding: 2.4rem;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${(props) => props.theme.border};
`

export const UserAvatar = styled(Avatar)`
  background: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.border};

  width: 6rem;
  height: 6rem;
  min-width: 6rem;
  min-height: 6rem;

  margin-bottom: 1.2rem;
`

export const UserData = styled.div`
  ${NoWrapEllipsis};
`

export const UserName = styled.div`
  ${NoWrapEllipsis};

  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.primaryText};

  margin-bottom: 0.2rem;
`

export const CompanyName = styled.div`
  ${NoWrapEllipsis};

  color: ${(props) => props.theme.secondaryText};
  font-size: 1.4rem;
`
