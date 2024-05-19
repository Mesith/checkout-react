import { Label, Select } from "flowbite-react"

type SelectOption = { value: string; label: string }

const SelectInput = ({
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
      <div className="mb-2 block">
        <Label htmlFor="countries" value={label} />
      </div>
      <Select id={fieldName} onChange={(e: any) => onChange(e.target.value)}>
        {options?.map((optionItem: SelectOption) => (
          <option value={optionItem?.value}>{optionItem?.label}</option>
        ))}
      </Select>
    </div>
  )
}

export default SelectInput
