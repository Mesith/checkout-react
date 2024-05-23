import { useRef, useEffect } from "react"

export const useCacheUnsubmittedValues = (
  onCacheUnsubmittedValues: (values: any) => void,
) => {
  const cacheValueRef = useRef<any>(null)

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (cacheValueRef.current) {
        onCacheUnsubmittedValues(cacheValueRef.current)
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [onCacheUnsubmittedValues])

  return cacheValueRef
}
