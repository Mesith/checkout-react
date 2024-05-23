import React from "react"
import { PackageItem } from "./PackageItem"

export interface PackageInputOptionItem {
  id: string
  name: string
  priceTag: string
  durationTag: string
  features: string[]
}
interface PackageInputProps {
  options: any[]
  onChange: (value: string) => void
  value: string
}
const PackagesInput = React.memo(
  ({ options, onChange, value }: PackageInputProps) => {
    const gridColumns = options.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"
    return (
      <div
        className={`space-y-8 lg:grid ${gridColumns} bg:red-200  sm:gap-6 xl:gap-10 lg:space-y-0 lg:justify-items-center`}
      >
        {options?.map((item: PackageInputOptionItem) => (
          <PackageItem
            key={item.id}
            id={item.id}
            name={item?.name}
            onClick={onChange}
            selectedItemClass={
              item.id === value ? "border-2 border-yellow-300" : ""
            }
            priceTag={item.priceTag}
            durationTag={item.durationTag}
            features={item.features}
          />
        ))}
      </div>
    )
  },
)

export default PackagesInput
