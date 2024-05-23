import { createBrowserRouter } from "react-router-dom"
import Welcome from "../features/checkout/Welcome"
import ChildGrade from "../features/checkout/ChildGrade"
import Packages from "../features/checkout/Packages"
import Payment from "../features/checkout/Payment"
import Home from "../features/home/Home"
import Main from "../features/home/Main"

export enum CHECKOUT_STEPS {
  WELCOME = "welcome",
  CHILD_GRADE = "child-grade",
  PACKAGES = "packages",
  PAYMENT = "payment",
}

export const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      { path: "/", element: <Main /> },
      { path: CHECKOUT_STEPS.WELCOME, element: <Welcome /> },
      { path: CHECKOUT_STEPS.CHILD_GRADE, element: <ChildGrade /> },
      { path: CHECKOUT_STEPS.PACKAGES, element: <Packages /> },
      { path: CHECKOUT_STEPS.PAYMENT, element: <Payment /> },
    ],
  },
])
