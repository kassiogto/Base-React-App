import styled from 'styled-components'

import { RoundIconButton } from 'src/components'
import { NoWrapEllipsis, SIZES } from 'src/styles'

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 80%;
`

export const DrawerToggler = styled(RoundIconButton)``

export const Logo = styled.img`
  height: 3.8rem;
  width: 3.8rem;

  margin-left: 1.6rem;
  border-radius: 50%;
`

export const NavbarTitle = styled.div`
  ${NoWrapEllipsis};
  font-size: 1.8rem;

  margin-left: 0.8rem;
`

export const Container = styled.div`
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
`
export const LoginContent = styled.div`
  padding: 1.6rem 0;

  display: flex;
  align-items: center;

  p {
    margin-right: 1.6rem;
  }
`
export const ContentMenuItem = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
  }

  li {
    margin-left: 2.8rem;
  }
`

export const MenuDropdown = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.snow};

  p {
    height: 100%;
    margin-left: 2rem;
  }

  p:hover {
    cursor: pointer;
  }
`
