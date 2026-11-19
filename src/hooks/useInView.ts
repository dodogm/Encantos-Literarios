import { useEffect, useRef, useState } from "react"

type Options = {
  threshold?: number
  rootMargin?: string
  /** Se true, mantém `true` depois da primeira entrada. Se false, alterna ao entrar/sair da tela. */
  once?: boolean
}

/**
 * Informa se um elemento está visível na viewport (IntersectionObserver).
 * Sem suporte ao IntersectionObserver, considera o elemento visível (conteúdo nunca fica escondido).
 */
export function useInView<T extends Element>({
  threshold = 0,
  rootMargin = "0px",
  once = false,
}: Options = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined")

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView] as const
}
