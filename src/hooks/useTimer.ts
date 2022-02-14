import { useState, useMemo, useEffect, useCallback } from 'react'

export const useTimer = (
  startTimerOnRender: boolean = false,
  initialTime: number = 0,
) => {
  const [isTimerRunning, setIsTimerRunning] = useState(startTimerOnRender)
  const [milliseconds, setMilliseconds] = useState(initialTime)

  const handleStartTimer = useCallback(() => {
    setIsTimerRunning(true)
  }, [])

  const handlePauseTimer = useCallback(() => {
    setIsTimerRunning(false)
  }, [])

  const handleStopTimer = useCallback(() => {
    setIsTimerRunning(false)
    setMilliseconds(0)
  }, [])

  const handleSetMilliseconds = useCallback((newMilliseconds: number) => {
    if (newMilliseconds < 0) setMilliseconds(0)
    setMilliseconds(newMilliseconds)
  }, [])

  useEffect(() => {
    let timer: number = 0

    if (isTimerRunning) {
      timer = window.setInterval(() => {
        setMilliseconds((currentMilliseconds) => currentMilliseconds + 100)
      }, 100)
    }

    return () => {
      window.clearInterval(timer)
    }
  }, [isTimerRunning])

  const { seconds, minutes, hours } = useMemo(() => {
    const secondsValue = milliseconds / 1000
    const minutesValue = secondsValue / 60
    const hoursValue = minutesValue / 60

    return {
      seconds: secondsValue - Math.floor(minutesValue) * 60,
      minutes: minutesValue - Math.floor(hoursValue) * 60,
      hours: hoursValue,
    }
  }, [milliseconds])

  const handleGetNumberText = useCallback((number: number): string => {
    const newNumber = Math.floor(number)
    return newNumber < 10 ? `0${newNumber}` : `${newNumber}`
  }, [])

  const timerText = useMemo(() => {
    const secondsText = handleGetNumberText(seconds)
    const minutesText = handleGetNumberText(minutes)
    const hoursText = handleGetNumberText(hours)
    return `${hoursText}:${minutesText}:${secondsText}`
  }, [handleGetNumberText, hours, minutes, seconds])

  return {
    isTimerRunning,

    milliseconds,
    seconds,
    minutes,
    hours,

    timerText,

    handleStartTimer,
    handleStopTimer,
    handlePauseTimer,
    handleSetMilliseconds,
  }
}
