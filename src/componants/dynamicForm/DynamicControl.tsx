import { Controller } from "react-hook-form"
import type { DynamicFieldData, SelectOption } from "./DynamicControleTypes"
import SelectInput from "../SelectInput"
import React from "react"
import InputText from "../common/InputText"
import CheckBox from "../common/CheckBox"
import type { ChildGradeInputOptionItem } from "../childGrade/ChildGradeInput"
import ChildGradeInput from "../childGrade/ChildGradeInput"
import type { PackageInputOptionItem } from "../packages/PackagesInput"
import PackagesInput from "../packages/PackagesInput"
// ** Dynamic Field Rendering based on Input Type **
export const DynamicControl = React.memo(
  ({
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
      case "email":
      case "text":
        return (
          <div>
            <Controller
              control={control}
              name={fieldName}
              rules={{
                required: config?.required,
                pattern: {
                  value:
                    inputType === "email"
                      ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                      : (config?.pattern as any),
                  message: "Please enter a valid email address",
                },
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
                    <span aria-invalid={"true"} className="text-red-400 ">
                      {error?.message}
                    </span>
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
                  <span aria-invalid={"true"} className="text-red-400 ">
                    {error?.message}
                  </span>
                )}
              </div>
            )}
          />
        )
      }
      case "check-box":
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
                  <span aria-invalid={"true"} className="text-red-400 ">
                    {error?.message}
                  </span>
                )}
              </div>
            )}
          />
        )
      case "child-grade":
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
                    <span
                      aria-invalid={"true"}
                      className="flex text-red-400 justify-center"
                    >
                      {error?.message}
                    </span>
                  )}
                </div>
                <ChildGradeInput
                  options={options as ChildGradeInputOptionItem[]}
                  onChange={onChange}
                  value={value}
                  label={label}
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
                    <span
                      aria-invalid={"true"}
                      className="flex text-red-400 justify-center"
                    >
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
  },
)
