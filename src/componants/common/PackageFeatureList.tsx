import React from "react"
import { PackageFeatureItem } from "../packages/PackageFeatureItem"

export const PackageFeatureList = React.memo(
  ({ features }: { features: string[] }) => {
    return (
      <ul className="mb-8 space-y-4 text-left">
        {features?.map((featureItem: string) => (
          <PackageFeatureItem key={featureItem} feature={featureItem} />
        ))}
      </ul>
    )
  },
)
