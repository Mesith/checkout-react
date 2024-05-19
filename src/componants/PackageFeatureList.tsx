import { PackageFeatureItem } from "./PackageFeatureItem"

export const PackageFeatureList = ({ features }: { features: string[] }) => {
  return (
    <ul className="mb-8 space-y-4 text-left">
      {features?.map((featureItem: string) => (
        <PackageFeatureItem feature={featureItem} />
      ))}
    </ul>
  )
}
