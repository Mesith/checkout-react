import { Checkbox, Label } from "flowbite-react"
import React from "react"

const CheckBox = React.memo(
  ({
    id,
    label,
    onChange,
    value,
  }: {
    id: string
    label: string
    onChange: (value: boolean) => void
    value: boolean
  }) => {
    return (
      <div className="flex items-center gap-2 mt-4">
        <Checkbox
          id={id}
          checked={value}
          onChange={(e: any) => {
            onChange(e.target.checked)
          }}
        />
        <Label value={label} htmlFor={id}>
          {label}
        </Label>
      </div>
    )
  },
)

export default CheckBox
