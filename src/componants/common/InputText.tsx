import { TextInput } from "flowbite-react"
import React from "react"

const InputText = React.memo(
  ({
    label,
    type,
    onChange,
    fieldName,
    value,
    ...rest
  }: {
    label: string
    type: string
    onChange: (value: string) => void
    fieldName: string
    value: string
    rest?: any
  }) => {
    return (
      <div>
        <label
          aria-label={label}
          className="block mt-2 text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <TextInput
            id="small"
            value={value}
            type={type}
            data-testid={fieldName}
            sizing="sm"
            min={0}
            onChange={(e: any) => onChange(e.target.value)}
            {...rest}
          />
        </div>
      </div>
    )
  },
)
export default InputText
