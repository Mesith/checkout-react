import { Button } from "flowbite-react"
import { setCurrenFormStep } from "./CheckoutSlice"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"

const Payment = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  return (
    <section className="bg-white mt-20 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <div className="flex justify-center h-32 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#3EAEAE"
            className="w-16 h-16 "
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Payment Success!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Congrats Your payment was successful. Next we will send an email with
          your details and instructions on how to view your course.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Button
            onClick={() => {
              dispatch(setCurrenFormStep(null))
              navigate("/", { replace: true })
            }}
            color="blue"
            className="flex w-[20%] justify-center rounded-md bg-green-400 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Enrol another student
          </Button>
          <Button
            onClick={() => {
              dispatch(setCurrenFormStep(null))
              navigate("/", { replace: true })
            }}
            color="blue"
            className="flex w-[20%] justify-center rounded-md bg-gray-900 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Begin onboarding
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Payment
