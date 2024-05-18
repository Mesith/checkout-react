import { createBrowserRouter } from "react-router-dom"
import Welcome from "../features/checkout/Welcome"
import ChildGrade from "../features/checkout/ChildGrade"
import Packages from "../features/checkout/Packages"
import Payment from "../features/checkout/Payment"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/child-grade",
    element: <ChildGrade />,
  },
  {
    path: "/packages",
    element: <Packages />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
])
