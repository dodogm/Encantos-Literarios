import { useSyncExternalStore } from "react"

const QUERY = "(hover: hover) and (pointer: fine)"

function subscribe(callback: () => void) {
  const media = window.matchMedia(QUERY)
  media.addEventListener("change", callback)
  return () => media.removeEventListener("change", callback)
}

/** true em dispositivos com mouse; false em telas touch (onde não existe hover). */
export function useCanHover() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => true,
  )
}
