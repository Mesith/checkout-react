import { useRef, useEffect } from "react"

export const useCacheUnsubmittedValues = (
  onCacheUnsubmittedValues: (values: any) => void,
) => {
  const cacheValueRef = useRef<any>(null)

  const cacheUnSavedValues = () => {
    if (cacheValueRef.current) {
      onCacheUnsubmittedValues(cacheValueRef.current)
    }
  }

  useEffect(() => {
    // handl page reload, cache unsaved user inputs
    window.addEventListener("beforeunload", cacheUnSavedValues)

    return () => {
      window.removeEventListener("beforeunload", cacheUnSavedValues)
    }
  }, [])

  useEffect(() => {
    // Handle back navigate, cache unsaved user inputs
    window.addEventListener("popstate", () => {
      cacheUnSavedValues()
    })

    return () => {
      window.removeEventListener("popstate", cacheUnSavedValues)
    }
  }, [])

  return cacheValueRef
}
