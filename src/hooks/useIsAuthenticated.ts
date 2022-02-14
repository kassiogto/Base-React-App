import { useTypedSelector } from './useTypedSelector'

export const useIsAuthenticated = () => {
  const isAuthenticated = useTypedSelector(({ Auth }) => Auth.isAuthenticated)
  return isAuthenticated
}
