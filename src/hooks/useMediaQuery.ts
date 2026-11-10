import { useCallback, useSyncExternalStore } from 'react'

/** Vrai tant que la requête média correspond (suit les changements de taille et d'orientation). */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = matchMedia(query)
      list.addEventListener('change', onChange)
      return () => list.removeEventListener('change', onChange)
    },
    [query],
  )
  return useSyncExternalStore(subscribe, () => matchMedia(query).matches)
}
