import { Button } from "flowbite-react/components/Button"
import { useAppDispatch } from "../../app/hooks"
import HeaderNavBar from "../../componants/HeaderNavBar"
import { setCurrenFormStep } from "../checkout/CheckoutSlice"
import { useNavigate } from "react-router-dom"
import { CHECKOUT_STEPS } from "../../router/router"

const Main = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <div>
      <HeaderNavBar />
      <div className="relative isolate px-6 pt-4 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Enrol Now
            </h1>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                onClick={() => {
                  dispatch(setCurrenFormStep(CHECKOUT_STEPS.WELCOME))
                  navigate(`/${CHECKOUT_STEPS.WELCOME}`)
                }}
                color="blue"
                className="flex w-[30%] justify-center rounded-md bg-gray-900 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Start Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
