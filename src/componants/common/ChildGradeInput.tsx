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
  label: string
}
const ChildGradeInput = React.memo(
  ({ options, onChange, value, label }: ChildGradeInputProps) => {
    return (
      <div aria-label={label}>
        {options?.map((item: ChildGradeInputOptionItem) => {
          return (
            <GradeItem
              key={item.id}
              id={item.id}
              name={item?.name}
              onClick={onChange}
              selectedItemClass={
                item.id === value ? "border-2 border-yellow-300" : ""
              }
            />
          )
        })}
      </div>
    )
  },
)

export default ChildGradeInput
