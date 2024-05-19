import { Checkbox, Label } from "flowbite-react"

const CheckBox = ({
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
        onChange={(e: any) => onChange(e.target.value)}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
}

export default CheckBox
