import { useTypedSelector } from './useTypedSelector'

export const useIsLoading = (...keys: string[]) => {
  const isLoading = useTypedSelector(({ Loading }) => {
    if (keys.length === 1) {
      const [key] = keys
      const loading = Loading.loading

      return !!loading && !!loading[key]
    } else if (keys.length > 1) {
      const loading = Loading.loading

      const someKeysIsTruthy = Object.keys(loading || {}).some((key) => {
        const keyIsInKeysArray = keys.includes(key)
        return keyIsInKeysArray && !!loading[key]
      })

      return !!loading && someKeysIsTruthy
    }

    return false
  })

  return isLoading
}
