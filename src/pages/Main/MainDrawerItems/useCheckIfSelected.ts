import { useLocation } from 'react-router-dom'

export default () => {
  const { pathname } = useLocation()

  const handleCheckIfSelected = (path: string, exact: boolean = false) => {
    if (exact) return pathname === path
    return pathname.includes(path)
  }

  return handleCheckIfSelected
}
