import { useCallback, useState } from 'react'

export const useToggleFunctions = (
  initialState: boolean = false,
): [boolean, () => void, () => void] => {
  const [isModalOpen, setIsModalOpen] = useState(initialState)

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return [isModalOpen, handleOpenModal, handleCloseModal]
}
