import { useEffect } from "react"
import type { Location } from "react-router-dom"
import { useLocation } from "react-router-dom"

export const useLocationEffect = (callback: (location: Location) => void) => {
  const location = useLocation()
  useEffect(() => {
    callback(location)
  }, [location, callback])
}
