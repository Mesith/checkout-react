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
    const cacheValueRef = useRef(null)
    const formMethods: any = useForm({ defaultValues: formValues })
    const {
      handleSubmit,
      watch,
      formState: { errors, isValid },
      getValues,
      control,
    } = formMethods

    const debounced = useDebouncedCallback(value => {
      cacheValueRef.current = value
    }, 1000)

    useEffect(() => {
      window.onbeforeunload = function () {
        if (cacheValueRef.current) {
          cacheUnSubmitValues(cacheValueRef.current)
        }
        return true
      }

      return () => {
        window.onbeforeunload = null
      }
    }, [])

    useEffect(() => {
      submitRef.current = handleSubmit((data: any) => {
        console.log("Form Submit")
      })
      const subscription = watch((values: any) => debounced(values))
      return () => {
        subscription.unsubscribe()
      }
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
            <div key={d.fieldName}>
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
