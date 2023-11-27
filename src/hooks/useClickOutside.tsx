import { useEffect } from 'react'

export const useClickOutside = (ref: any, callback: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('mouseclick', handleClickOutside)
    return () => {
      document.removeEventListener('mouseclick', handleClickOutside)
    }
  }, [ref])
}