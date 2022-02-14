import styled, { keyframes } from 'styled-components'

import { Toast } from 'src/components'

type SuccessToastProps = {
  duration: number
}

const FadeAnimation = keyframes`
  0% { opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { opacity: 0; }
`

export const SuccessToast = styled(Toast)<SuccessToastProps>`
  position: fixed;
  top: 2.4rem;
  right: 2.4rem;

  background: ${(props) => props.theme.successDark};

  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);

  animation: ${FadeAnimation} ${(props) => props.duration / 1000}s;
`
