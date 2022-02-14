import { useRef, useEffect } from 'react'

const createRootElement = (id: string): HTMLDivElement => {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)
  return rootContainer
}

const addRootElement = (rootElem: Element) => {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild?.nextElementSibling || null,
  )
}

export const usePortal = (id: string) => {
  const rootElemRef = useRef<Element | null>(null)

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`)
    const parentElement = existingParent || createRootElement(id)

    if (!existingParent) addRootElement(parentElement)
    if (rootElemRef.current) parentElement.appendChild(rootElemRef.current)

    return () => {
      rootElemRef.current?.remove()
      if (parentElement.childElementCount === 0) {
        parentElement.remove()
      }
    }
  }, [id])

  // Lazy initialization
  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div')
    }

    return rootElemRef.current
  }

  return getRootElem()
}
