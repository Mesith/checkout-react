import React from "react"
import FooterNavitation from "../../componants/FooterNavitation"
import { useNavigate } from "react-router-dom"
import PackageList from "../../componants/PackageList"

const Packages = () => {
  const navigate = useNavigate()
  return (
    <div className="flex mt-20 min-h-full flex-col justify-center px-6 py-4 lg:px-8">
      <PackageList />
      <FooterNavitation
        onBackPress={() => {
          console.log("Back")
          navigate("/child-grade")
        }}
        onNextPress={() => {
          console.log("Next")
          navigate("/packages")
        }}
      />
    </div>
  )
}

export default Packages
