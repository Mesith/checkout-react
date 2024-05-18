import { TextInput } from "flowbite-react"
import React from "react"

const InputText = ({ label, type }: { label: string; type: string }) => {
  return (
    <div>
      <label
        for="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <TextInput id="small" type="text" sizing="sm" />
      </div>
    </div>
  )
}
export default InputText
