import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import {
  cachePackageFormValue,
  resetChache,
  selectPackageFeildsValues,
  setCurrenFormStep,
} from "./CheckoutSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import DynamicForm from "../../componants/dynamicForm/DynamicForm"
import { CHECKOUT_STEPS } from "../../router/router"
import { useFeatureValue } from "@growthbook/growthbook-react"
import FooterNavitation from "../../componants/navigation/FooterNavitation"

const Packages = () => {
  const formRef = useRef<any>(null)
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const formFeatureValues: any = useFeatureValue("form-feature", {})
  const packageFeildsValues = useAppSelector(selectPackageFeildsValues)
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-2 uppercase mt-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            How long do you need to access to Euka
          </h2>
        </div>

        <DynamicForm
          ref={formRef}
          fields={formFeatureValues?.packageFeilds}
          formValues={packageFeildsValues}
          onCacheUnsubmittedValues={(formData: any) => {
            dispatch(cachePackageFormValue(formData))
          }}
        />

        <FooterNavitation
          onBackPress={() => {
            dispatch(setCurrenFormStep(CHECKOUT_STEPS.CHILD_GRADE))
            navigate(-1)
          }}
          onNextPress={() => {
            if (formRef.current && formRef.current.getValues) {
              formRef.current.submit()

              if (formRef.current.isValid()) {
                const formData = formRef.current.getValues()
                dispatch(cachePackageFormValue(formData))
                dispatch(resetChache())
                navigate(`/${CHECKOUT_STEPS.PAYMENT}`, { replace: true })
              }
            }
          }}
        />
      </div>
    </section>
  )
}

export default Packages
