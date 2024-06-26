import { useRef } from "react"
import { Button } from "flowbite-react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  selectWelcomeFeildsValues,
  setCurrenFormStep,
  cacheWelcomeFormValue,
} from "./CheckoutSlice"
import DynamicForm from "../../componants/dynamicForm/DynamicForm"
import { CHECKOUT_STEPS } from "../../router/router"
import { useFeatureValue } from "@growthbook/growthbook-react"

const Welcome = () => {
  const dispatch = useAppDispatch()
  const formRef = useRef<any>(null)
  const wlcomeFeildsValues = useAppSelector(selectWelcomeFeildsValues)
  const formFeatureValues: any = useFeatureValue("form-feature", {})

  const navigate = useNavigate()

  const handleNextClick = (formRef: any) => {
    if (
      !formRef ||
      !formRef.current ||
      !formRef.current.getValues ||
      !formRef.current.isValid
    ) {
      return
    }

    formRef.current.submit()

    if (formRef.current.isValid()) {
      const formData = formRef.current.getValues()
      dispatch(setCurrenFormStep(CHECKOUT_STEPS.CHILD_GRADE))
      dispatch(cacheWelcomeFormValue(formData))
      navigate(`/${CHECKOUT_STEPS.CHILD_GRADE}`)
    }
  }

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <h2 className="mt-10 text-center uppercase text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome to the Euka Family
        </h2>
        <p className="mt-10 text-center text-sm text-gray-500">
          Provide your details below so that we can create your parent account{" "}
        </p>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="py-6">
            <DynamicForm
              ref={formRef}
              fields={formFeatureValues?.welcomeFeilds}
              formValues={wlcomeFeildsValues}
              onCacheUnsubmittedValues={(formData: any) =>
                dispatch(cacheWelcomeFormValue(formData))
              }
            />
          </div>

          <div className="space-y-6">
            <Button
              onClick={() => handleNextClick(formRef)}
              color="blue"
              className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Next
            </Button>
          </div>

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
