import { FormProvider, useForm } from "react-hook-form"
import type { DynamicFieldData } from "./DynamicControleTypes"
import { DynamicControl } from "./DynamicControl"
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { useDebouncedCallback } from "use-debounce"

interface FormProps {
  fields: DynamicFieldData[]
  formValues: any
  cacheUnSubmitValues: any
}

export const Form = forwardRef(
  ({ fields, formValues, cacheUnSubmitValues }: FormProps, ref: any) => {
    const submitRef = useRef(null)
    const formMethods: any = useForm({ defaultValues: formValues })
    const {
      handleSubmit,
      watch,
      formState: { errors, isValid },
      getValues,
      control,
    } = formMethods

    const debounced = useDebouncedCallback(value => {
      cacheUnSubmitValues(value)
    }, 1000)
    console.log("Error", errors)
    useEffect(() => {
      submitRef.current = handleSubmit((data: any) => {
        console.log("Submitted data:", data)
      })
      const subscription = watch((values: any) => debounced(values))
      return () => subscription.unsubscribe()
    }, [handleSubmit, cacheUnSubmitValues, watch, debounced])

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
  },
)
