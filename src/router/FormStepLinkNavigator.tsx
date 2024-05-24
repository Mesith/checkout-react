import { Navigate, useLocation } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { selectCurrentFormStep } from "../features/checkout/CheckoutSlice"
import usePreviousLocation from "../hooks/usePreviousLocation"
import React from "react"

/**
 * FormStepLinkNavigator component ensures that users are redirected to the
 * current form step based on the state in the Redux store.
 *
 * @param {React.ReactNode} children - The child components to be rendered.
 * @returns {JSX.Element} - The wrapped component or a redirect.
 */
const FormStepLinkNavigator = React.memo(({ children }: any) => {
  const location = useLocation()
  const currentStep = useAppSelector(selectCurrentFormStep)
  const previousLocation = usePreviousLocation()

  if (
    !previousLocation &&
    currentStep &&
    location.pathname &&
    currentStep !== location?.pathname?.slice(1)
  ) {
    return <Navigate to={currentStep} replace />
  }

  return children
})

export default FormStepLinkNavigator
