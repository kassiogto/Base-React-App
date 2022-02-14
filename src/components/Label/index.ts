import styled from 'styled-components'

export const DefaultLabel = styled.label`
  color: ${({ theme }) => theme.primaryText};
  display: flex;
  align-items: center;

  * {
    margin-right: 0.8rem;
  }

  .label-hint {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 1.2rem;
    font-style: italic;
  }

  .required {
    color: ${({ theme }) => theme.warning};
    font-size: 1.3rem;
    font-style: italic;
  }
`
