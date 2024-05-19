import { Controller, useFormContext } from "react-hook-form"
import type { DynamicFieldData } from "./DynamicControleTypes"
import InputText from "../InputText"
import SelectInput from "../SelectInput"
import CheckBox from "../CheckBox"

export const DynamicControl = ({
  inputType,
  fieldName,
  defaultValue,
  options = [],
  config,
  label,
  error,
  control,
}: DynamicFieldData & { control: any }) => {
  const { register } = useFormContext()

  switch (inputType) {
    case "number":
    case "text":
      return (
        <div>
          <Controller
            control={control}
            name={fieldName}
            rules={{
              required: config?.required,
              pattern: config?.pattern,
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div>
                <InputText
                  label={label}
                  type={inputType}
                  onChange={onChange}
                  fieldName={fieldName}
                  value={value}
                />
                {error?.message && (
                  <span className="text-red-400 ">{error?.message}</span>
                )}
              </div>
            )}
          />
        </div>
      )
    case "select": {
      return (
        <Controller
          control={control}
          name={fieldName}
          rules={{
            required: config?.required,
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <div>
              <SelectInput
                label={label}
                fieldName={fieldName}
                onChange={onChange}
                options={options}
              />
              {error?.message && (
                <span className="text-red-400 ">{error?.message}</span>
              )}
            </div>
          )}
        />
      )
    }
    case "checkbox":
      return (
        <Controller
          control={control}
          name={fieldName}
          rules={{
            required: config?.required,
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <div>
              <CheckBox
                id={fieldName}
                label={label}
                onChange={onChange}
                value={value}
              />
              {error?.message && (
                <span className="text-red-400 ">{error?.message}</span>
              )}
            </div>
          )}
        />
      )
    default:
      return <input type="text" />
  }
}
