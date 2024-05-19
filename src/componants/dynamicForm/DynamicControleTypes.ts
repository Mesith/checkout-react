import type { RegisterOptions } from "react-hook-form"

export type ControlType = "text" | "select" | "number" | "checkbox"

export interface SelectOption {
  label: string
  value: string
}

export interface DynamicFieldData {
  label: string
  inputType: ControlType
  fieldName: string
  defaultValue: any
  options?: SelectOption[]
  config?: RegisterOptions
  required?: boolean
  error?: { required: boolean; message: string }
}

export interface DynamicFeilds {
  welcomeFeilds: DynamicFieldData[]
  childGradeFeilds: DynamicFieldData[]
  packageFeilds: DynamicFieldData[]
}
