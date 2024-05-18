import { createBrowserRouter } from "react-router-dom"
import Welcome from "../features/checkout/Welcome"
import ChildGrade from "../features/checkout/ChildGrade"
import Packages from "../features/checkout/Packages"
import Payment from "../features/checkout/Payment"
import Home from "../features/home/Home"
import Main from "../features/home/Main"

export const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  {
    path: "/", // Use the same root path for nested routes
    element: <Home />,
    children: [
      { path: "welcome", element: <Welcome /> },
      { path: "child-grade", element: <ChildGrade /> },
      { path: "packages", element: <Packages /> },
      { path: "payment", element: <Payment /> },
    ],
  },
])
