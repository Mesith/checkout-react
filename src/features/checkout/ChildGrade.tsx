import { useMemo, useRef } from "react"
import FooterNavitation from "../../componants/FooterNavitation"
import { useNavigate } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  cacheChildGradeFormValue,
  selectChildGradeFeildsValues,
  selectFormFeilds,
  setCurrenFormStep,
} from "./CheckoutSlice"
import DynamicForm from "../../componants/dynamicForm/DynamicForm"
import { CHECKOUT_STEPS } from "../../router/router"

const ChildGrade = () => {
  const formRef = useRef<any>(null)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const formFeilds = useAppSelector(selectFormFeilds)
  const childGradeFeildsValues = useAppSelector(selectChildGradeFeildsValues)
  const cacheSubmitValues = useMemo(
    () => (formData: any) => dispatch(cacheChildGradeFormValue(formData)),
    [dispatch],
  )

  const handleBackPress = () => {
    dispatch(setCurrenFormStep(CHECKOUT_STEPS.WELCOME))
    const formData = formRef.current.getValues()
    dispatch(cacheChildGradeFormValue(formData))
    navigate(-1)
  }

  const handleNextPress = () => {
    if (
      formRef.current &&
      formRef.current.getValues &&
      formRef.current.isValid()
    ) {
      const formData = formRef.current.getValues()
      dispatch(cacheChildGradeFormValue(formData))
      dispatch(setCurrenFormStep(CHECKOUT_STEPS.PACKAGES))
      navigate(`/${CHECKOUT_STEPS.PACKAGES}`)
    } else {
      // Show error
    }
  }

  return (
    <div>
      <div className="flex mt-20 min-h-full flex-col justify-center px-6 py-4 lg:px-8">
        <h2 className="mt-2 uppercase text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Confirm your child's grade level
        </h2>
        <DynamicForm
          ref={formRef}
          fields={formFeilds?.childGradeFeilds}
          formValues={childGradeFeildsValues}
          onCacheUnsubmittedValues={cacheSubmitValues}
        />
      </div>
      <FooterNavitation
        onBackPress={handleBackPress}
        onNextPress={handleNextPress}
      />
    </div>
  )
}

export default ChildGrade
