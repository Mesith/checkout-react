import { Controller } from "react-hook-form"
import type { DynamicFieldData, SelectOption } from "./DynamicControleTypes"
import InputText from "../InputText"
import SelectInput from "../SelectInput"
import CheckBox from "../CheckBox"
import type { ChildGradeInputOptionItem } from "../ChildGradeInput"
import ChildGradeInput from "../ChildGradeInput"
import type { PackageInputOptionItem } from "../PackagesInput"
import PackagesInput from "../PackagesInput"

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
                options={options as SelectOption[]}
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
    case "childgrade":
      return (
        <Controller
          control={control}
          name={fieldName}
          rules={{
            required: config?.required,
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <>
              <div className="h-8 justify-center">
                {error?.message && (
                  <span className="flex text-red-400 justify-center">
                    {error?.message}
                  </span>
                )}
              </div>
              <ChildGradeInput
                options={options as ChildGradeInputOptionItem[]}
                onChange={onChange}
                value={value}
              />
            </>
          )}
        />
      )
    case "package":
      return (
        <Controller
          control={control}
          name={fieldName}
          rules={{
            required: config?.required,
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <>
              <div className="h-8 justify-center">
                {error?.message && (
                  <span className="flex text-red-400 justify-center">
                    {error?.message}
                  </span>
                )}
              </div>
              <PackagesInput
                options={options as PackageInputOptionItem[]}
                onChange={onChange}
                value={value}
              />
            </>
          )}
        />
      )
    default:
      return null
  }
}
