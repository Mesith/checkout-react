import { useEffect, useRef } from "react"
import type { Location } from "react-router-dom"
import { useLocation } from "react-router-dom"

const usePreviousLocation = () => {
  const location = useLocation()
  const previousLocationRef = useRef<Location | null>(null)

  useEffect(() => {
    previousLocationRef.current = location
  }, [location])

  return previousLocationRef.current
}

export default usePreviousLocation
