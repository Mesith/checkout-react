import { Navigate, useLocation } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { selectCurrentFormStep } from "../features/checkout/CheckoutSlice"

/**
 * FormStepLinkNavigator component ensures that users are redirected to the
 * current form step based on the state in the Redux store.
 *
 * @param {React.ReactNode} children - The child components to be rendered.
 * @returns {JSX.Element} - The wrapped component or a redirect.
 */
const FormStepLinkNavigator = ({ children }: any) => {
  const location = useLocation()
  const currentStep = useAppSelector(selectCurrentFormStep)

  if (currentStep && currentStep !== location.pathname.slice(1)) {
    return <Navigate to={currentStep} replace state={{ from: location }} />
  }

  return children
}

export default FormStepLinkNavigator
