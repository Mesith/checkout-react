import { createBrowserRouter } from "react-router-dom"
import Welcome from "../features/checkout/Welcome"
import ChildGrade from "../features/checkout/ChildGrade"
import Packages from "../features/checkout/Packages"
import Payment from "../features/checkout/Payment"
import Home from "../features/home/Home"
import Main from "../features/home/Main"
import FormStepLinkNavigator from "./FormStepLinkNavigator"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <FormStepLinkNavigator>
        <Main />
      </FormStepLinkNavigator>
    ),
  },
  // This route defines a nested path structure starting with anything
  // other than the root path (`/`)
  {
    element: <Home />,
    children: [
      { path: "welcome", element: <Welcome /> },
      { path: "child-grade", element: <ChildGrade /> },
      { path: "packages", element: <Packages /> },
      { path: "payment", element: <Payment /> },
    ],
  },
])
