import { PackageFeatureList } from "./PackageFeatureList"

export type PackageItemType = {
  id: string
  name: string
  priceTag: string
  durationTag: string
  features: string[]
  onClick?: (val: string) => void
  value?: string
}

export const PackageItem = ({
  id,
  name,
  durationTag,
  priceTag,
  features,
  value,
  onClick,
}: PackageItemType) => {
  const selectedItemClass = id === value ? "border-2 border-yellow-300" : ""
  return (
    <div
      onClick={() => {
        if (onClick) onClick(id)
      }}
      className={`flex ${selectedItemClass} flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white`}
    >
      <h3 className="mb-4 text-5xl font-semibold">{name}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {durationTag}
      </p>
      <div className="flex justify-center items-baseline my-2">
        <span className="mr-2 text-2xl font-extrabold">{priceTag}</span>
      </div>

      <PackageFeatureList features={features} />
    </div>
  )
}
