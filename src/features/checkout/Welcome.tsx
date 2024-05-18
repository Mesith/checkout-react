import InputText from "../../componants/InputText"
import CheckBox from "../../componants/CheckBox"
import { Button } from "flowbite-react"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
  const navigate = useNavigate()
  const handleNextClick = () => {
    console.log("Next Clicked")
    navigate("/child-grade")
  }
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome to the Euka Family
        </h2>
        <p className="mt-10 text-center text-sm text-gray-500">
          Provide your details below so that we cancreate your parent account{" "}
        </p>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <InputText label={"Email Address"} type={"email"} />
            <CheckBox
              id={"keep-for-offers"}
              label={"Keep me up to date on news and educational offers"}
            />
            <div>
              <Button
                onClick={handleNextClick}
                color="blue"
                className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Next
              </Button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500 px-4">
            Already have an account?
            <a
              href="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
