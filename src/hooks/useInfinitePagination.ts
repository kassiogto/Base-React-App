import { useCallback, useMemo, useState } from 'react'

type Params = {
  limit: number
  total?: number
  initialPageNumber?: number
}

export const useInfinitePagination = ({
  initialPageNumber = 0,
  limit,
  total,
}: Params) => {
  const [pageNumber, setPageNumber] = useState(initialPageNumber)

  const offset = useMemo(() => pageNumber * limit, [limit, pageNumber])

  const nextOffset = useMemo(
    () => (pageNumber + 1) * limit,
    [limit, pageNumber],
  )

  const canIncrementPageNumber = useMemo(
    () => !!total && (pageNumber + 1) * limit > total,
    [limit, pageNumber, total],
  )

  const handleResetPageNumber = useCallback(() => {
    setPageNumber(initialPageNumber)
  }, [initialPageNumber])

  const handleIncrementPageNumber = useCallback(() => {
    setPageNumber((currentNumber) => {
      if (total) {
        const newPageNumber = currentNumber + 1
        const numberOfItemsToShow = newPageNumber * limit
        const canNotIncrementPageNumber = numberOfItemsToShow > total
        if (canNotIncrementPageNumber) return currentNumber
      }

      return currentNumber + 1
    })
  }, [limit, total])

  return useMemo(
    () => ({
      total,
      limit,

      offset,
      nextOffset,
      canIncrementPageNumber,

      pageNumber,
      setPageNumber,

      handleIncrementPageNumber,
      handleResetPageNumber,
    }),
    [
      canIncrementPageNumber,
      handleIncrementPageNumber,
      handleResetPageNumber,
      limit,
      nextOffset,
      offset,
      pageNumber,
      total,
    ],
  )
}

export type InfinitePagination = ReturnType<typeof useInfinitePagination>
