import { Checkbox, Label } from "flowbite-react"
import React from "react"

const CheckBox = ({ id, label }: { id: string; label: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
}

export default CheckBox
