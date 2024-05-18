import React from "react"
import { PackageItem } from "./PackageItem"

export type PackageItemType = {
  name: string
  priceTag: string
  durationTag: string
  features: string[]
}

const items = [
  {
    name: "One Term",
    priceTag: "676 AUD per annum",
    durationTag: "3 months - 169 AUD",
    features: ["test1", "test2 test3"],
  },
  //   { name: "package2", priceTag: "676 AUD per annum", durationTag: "12 months" },
  {
    name: "Full Year",
    priceTag: "676 AUD per annum",
    durationTag: "3 months - 169 AUD",
    features: ["test1", "test2 test3", "test 4,", "tesd test features"],
  },
]

const PackageList = () => {
  const gridColumns = items.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            How long do you need to access to Euka
          </h2>
        </div>

        <div
          className={`space-y-8 lg:grid ${gridColumns}  sm:gap-6 xl:gap-10 lg:space-y-0 lg:justify-items-center`}
        >
          {items.map((item: PackageItemType) => (
            <PackageItem
              name={item?.name}
              priceTag={item?.priceTag}
              durationTag={item?.durationTag}
              features={item?.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackageList
