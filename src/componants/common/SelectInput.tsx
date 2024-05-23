import { Label, Select } from "flowbite-react"
import React from "react"

type SelectOption = { value: string; label: string }

const SelectInput = React.memo(
  ({
    label,
    fieldName,
    onChange,
    options,
    ...rest
  }: {
    label: string
    fieldName: string
    onChange: (value: string) => void
    options: SelectOption[]
    rest?: any
  }) => {
    return (
      <div className="max-w-md">
        <div aria-label={label} className="mb-2 block">
          <Label htmlFor="countries" value={label} />
        </div>
        <Select
          value={label}
          id={fieldName}
          onChange={(e: any) => onChange(e.target.value)}
        >
          {options?.map((optionItem: SelectOption) => (
            <option key={optionItem.value} value={optionItem?.value}>
              {optionItem?.label}
            </option>
          ))}
        </Select>
      </div>
    )
  },
)

export default SelectInput
