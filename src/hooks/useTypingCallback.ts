import { useRef } from 'react'

interface Options {
  stopTypingCallback?: () => void
  startTypingCallback?: () => void
  delay?: number
}

export const useTypingCallback = (options: Options) => {
  const { stopTypingCallback, startTypingCallback, delay = 600 } = options

  const timer = useRef(0)

  const handleInput = () => {
    if (startTypingCallback) startTypingCallback()

    window.clearTimeout(timer.current)

    timer.current = window.setTimeout(() => {
      if (stopTypingCallback) stopTypingCallback()
    }, delay)
  }

  return handleInput
}
