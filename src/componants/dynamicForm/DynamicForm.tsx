import { FormProvider, useForm } from "react-hook-form"
import type { DynamicFieldData } from "./DynamicControleTypes"
import { DynamicControl } from "./DynamicControl"
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import React from "react"
import { useCacheUnsubmittedValues } from "../../hooks/useCacheUnSubmitValues"

interface FormProps {
  fields: DynamicFieldData[]
  formValues: any
  onCacheUnsubmittedValues: (values: any) => void
}

export interface FormRef {
  submit: () => void
  isValid: () => boolean
  getValues: () => any
}

export interface FormRef {
  submit: () => void
  isValid: () => boolean
  getValues: () => any
}

const DynamicForm = forwardRef<FormRef, FormProps>(
  ({ fields, formValues, onCacheUnsubmittedValues }, ref) => {
    const submitRef = useRef<(() => void) | null>(null)
    const cacheValueRef = useCacheUnsubmittedValues(onCacheUnsubmittedValues)
    const formMethods = useForm<any>({ defaultValues: formValues })
    const {
      handleSubmit,
      watch,
      formState: { errors, isValid },
      getValues,
      control,
    } = formMethods

    console.log("errors", errors)

    useEffect(() => {
      submitRef.current = handleSubmit(() => {
        console.log("Form Submit")
      })
      const subscription = watch(values => (cacheValueRef.current = values))
      return () => {
        subscription.unsubscribe()
      }
    }, [handleSubmit, watch, cacheValueRef])

    useImperativeHandle(
      ref,
      () => ({
        submit: () => {
          if (submitRef.current) {
            submitRef.current()
          }
        },
        isValid: () => isValid,
        getValues: () => getValues(),
      }),
      [isValid, getValues],
    )

    return (
      <form data-testid="dynamic-form">
        {!fields?.length && (
          <div className="text-red-400 w-full items-center text-center mt-10">
            Error Loading, Please try again
          </div>
        )}
        {fields?.length > 0 && (
          <FormProvider {...formMethods}>
            {fields?.map((field: any) => (
              <div key={field.fieldName} data-testid="dynamic-control">
                <DynamicControl
                  error={errors[field.fieldName]}
                  control={control}
                  {...field}
                />
              </div>
            ))}
          </FormProvider>
        )}
      </form>
    )
  },
)

export default React.memo(DynamicForm)
