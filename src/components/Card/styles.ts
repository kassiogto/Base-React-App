import styled from 'styled-components'

export const CardContent = styled.div`
  display: block;
  width: 40rem;
  height: 53rem;

  &:hover {
    cursor: pointer;
  }
`
export const CardHeader = styled.div`
  height: 30.5rem;
  width: 100%;
  padding: 15px;
  background-size: cover;
  color: #fff;
`

export const CardBodyTittle = styled.h3`
  text-transform: uppercase;
  font-size: 1.8rem;
  margin: 0;
`
export const DivDate = styled.div`
  display: flex;

  flex: 1;
`
export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #fff;
  width: 100%;

  height: 43%;

  border-radius: 0.3rem;
`
export const Date = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: grey;
`
export const TextBody = styled.p`
  font-size: 1.6rem;
  line-height: 1.8;
`

export const ButtonPrimary = styled.button`
  border: none;
  box-shadow: none;
  font-family: inherit;
  background-color: transparent;
  color: $blue;
  font-size: 15px;
  transition: 0.25s;

  i {
    padding-right: 4px;
  }
`
export const DesignerLink = styled.div`
  color: #fff;
  text-align: center;
  font-size: 12px;
  text-decoration: none;
  display: block;
`
