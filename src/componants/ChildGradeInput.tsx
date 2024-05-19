import React from "react"
import GradeItem from "./GradeItem"

export interface ChildGradeInputOptionItem {
  id: string
  name: string
  description: string
}
interface ChildGradeInputProps {
  options: ChildGradeInputOptionItem[]
  onChange: (value: string) => void
  value: string
}
const ChildGradeInput = ({
  options,
  onChange,
  value,
}: ChildGradeInputProps) => {
  return (
    <>
      {options?.map((item: ChildGradeInputOptionItem) => (
        <GradeItem
          key={item.id}
          id={item.id}
          name={item?.name}
          onClick={onChange}
          value={value}
        />
      ))}
    </>
  )
}

export default ChildGradeInput
