import { FormProvider, useForm } from "react-hook-form"
import type { DynamicFieldData } from "./DynamicControleTypes"
import { DynamicControl } from "./DynamicControl"
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { useDebouncedCallback } from "use-debounce"

// Enables creation of forms with adaptable structures
// based on provided data, offering flexibility and data collection
// customization.
interface FormProps {
  fields: DynamicFieldData[]
  formValues: any
  cacheUnSubmitValues: any
}

export const Form = forwardRef(
  ({ fields, formValues, cacheUnSubmitValues }: FormProps, ref: any) => {
    const submitRef: any = useRef(null)
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
      //cached form values to ref avoid unnessary rerenders
      // cached every changes to handle user leave the page without clicking submit button
      cacheValueRef.current = value
    }, 1000)

    useEffect(() => {
      //defined onbeforeunload listener to cache the value when user accidently close the browser
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
      //initialize subscription to listen form value changes
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
      <form data-testid="dynamic-form">
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
