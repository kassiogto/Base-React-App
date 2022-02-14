import { useEffect } from 'react'
import ReactTooltip from 'react-tooltip'

export const useRebuildTooltips = () => {
  useEffect(() => {
    ReactTooltip.rebuild()
  })
}
