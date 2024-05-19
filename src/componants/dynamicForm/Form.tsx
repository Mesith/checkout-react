import { FormProvider, useForm } from "react-hook-form"
import type { DynamicFieldData } from "./DynamicControleTypes"
import { DynamicControl } from "./DynamicControl"
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"

interface FormProps {
  fields: DynamicFieldData[]
  values: any
}

export const Form = forwardRef(({ fields, values }: FormProps, ref: any) => {
  const submitRef = useRef(null)
  const formMethods: any = useForm({ defaultValues: values })
  const {
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    control,
  } = formMethods

  useEffect(() => {
    submitRef.current = handleSubmit((data: any) => {
      console.log("Submitted data:", data)
    })
  }, [handleSubmit])

  useImperativeHandle(ref, () => ({
    submit: () => {
      if (submitRef.current) {
        submitRef.current()
      }
    },
    isValid: () => isValid,
    getValues: () => getValues(),
  }))

  return (
    <form>
      <FormProvider {...formMethods}>
        {fields.map((d, i) => (
          <div key={i}>
            <DynamicControl
              error={errors[d?.fieldName]}
              control={control}
              {...d}
            />
          </div>
        ))}
      </FormProvider>
    </form>
  )
})
