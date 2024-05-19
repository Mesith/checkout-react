import { useRef } from "react"
import FooterNavitation from "../../componants/FooterNavitation"
import { useNavigate } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  cacheChildGradeFormValue,
  selectChildGradeFeildsValues,
  selectFormFeilds,
} from "./CheckoutSlice"
import { Form } from "../../componants/dynamicForm/Form"

const ChildGrade = () => {
  const formRef = useRef<any>(null)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const formFeilds = useAppSelector(selectFormFeilds)
  const childGradeFeildsValues = useAppSelector(selectChildGradeFeildsValues)

  return (
    <div>
      <div className="flex mt-20 min-h-full flex-col justify-center px-6 py-4 lg:px-8">
        <h2 className="mt-2 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Confirm your child's grade level
        </h2>
        <Form
          ref={formRef}
          fields={formFeilds?.childGradeFeilds}
          formValues={childGradeFeildsValues}
          cacheUnSubmitValues={(formData: any) =>
            dispatch(cacheChildGradeFormValue(formData))
          }
        />
      </div>
      <FooterNavitation
        onBackPress={() => {
          navigate("/welcome")
        }}
        onNextPress={() => {
          if (formRef.current && formRef.current.getValues) {
            formRef.current.submit()

            if (formRef.current.isValid()) {
              const formData = formRef.current.getValues()
              dispatch(cacheChildGradeFormValue(formData))
              navigate("/packages")
            }
          }
        }}
      />
    </div>
  )
}

export default ChildGrade
