import { Outlet } from "react-router-dom"
import HeaderNavBar from "../../componants/HeaderNavBar"
import FormStepLinkNavigator from "../../router/FormStepLinkNavigator"

const Home = () => {
  return (
    <div>
      <HeaderNavBar />
      <FormStepLinkNavigator>
        <Outlet />
      </FormStepLinkNavigator>
    </div>
  )
}

export default Home
