import type { RegisterOptions } from "react-hook-form"
import type { ChildGradeInputOptionItem } from "../ChildGradeInput"
import type { PackageInputOptionItem } from "../PackagesInput"

export type ControlType =
  | "text"
  | "select"
  | "number"
  | "checkbox"
  | "childgrade"
  | "package"

export interface SelectOption {
  label: string
  value: string
}

export interface DynamicFieldData {
  label: string
  inputType: ControlType
  fieldName: string
  defaultValue: any
  options?:
    | SelectOption[]
    | ChildGradeInputOptionItem[]
    | PackageInputOptionItem[]
  config?: RegisterOptions
  required?: boolean
  error?: { required: boolean; message: string }
}

export interface DynamicFeilds {
  welcomeFeilds: DynamicFieldData[]
  childGradeFeilds: DynamicFieldData[]
  packageFeilds: DynamicFieldData[]
}
