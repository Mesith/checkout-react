import { useRef } from "react"
import FooterNavitation from "../../componants/FooterNavitation"
import { useNavigate } from "react-router-dom"
import {
  cachePackageFormValue,
  resetChache,
  selectFormFeilds,
  selectPackageFeildsValues,
  setCurrenFormStep,
} from "./CheckoutSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { Form } from "../../componants/dynamicForm/Form"

const Packages = () => {
  const formRef = useRef<any>(null)
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const formFeilds = useAppSelector(selectFormFeilds)
  const packageFeildsValues = useAppSelector(selectPackageFeildsValues)
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-2 uppercase mt-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            How long do you need to access to Euka
          </h2>
        </div>

        <Form
          ref={formRef}
          fields={formFeilds?.packageFeilds}
          formValues={packageFeildsValues}
          cacheUnSubmitValues={(formData: any) => {
            dispatch(cachePackageFormValue(formData))
          }}
        />
        <FooterNavitation
          onBackPress={() => {
            dispatch(setCurrenFormStep("child-grade"))
            navigate("/child-grade")
          }}
          onNextPress={() => {
            if (formRef.current && formRef.current.getValues) {
              formRef.current.submit()

              if (formRef.current.isValid()) {
                const formData = formRef.current.getValues()
                dispatch(cachePackageFormValue(formData))
                dispatch(resetChache())
                navigate("/payment")
              }
            }
          }}
        />
      </div>
    </section>
  )
}

export default Packages
