import styled from 'styled-components'

type CheckMarkProps = {
  disabled?: boolean
  checked?: boolean
  isCheckMarkRounded?: boolean
}

export const Container = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 1.6rem;
    user-select: none;
  }
`

export const CheckMark = styled.div<CheckMarkProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${(props) => (props.isCheckMarkRounded ? '100%' : '0.5rem')};

  min-width: 2.8rem;
  min-height: 2.8rem;

  color: white;
  font-size: 2rem;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background: ${({ theme, checked }) => (checked ? theme.success : theme.snow)};

  &:hover {
    background: ${({ theme, checked }) =>
      checked ? theme.success : 'rgba(0,0,0,0.1)'};
  }
`

export const Input = styled.input`
  display: none;
`
