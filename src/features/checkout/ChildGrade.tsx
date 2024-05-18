import React from "react"
import GradeItem from "../../componants/GradeItem"
import FooterNavitation from "../../componants/FooterNavitation"
import { useNavigate } from "react-router-dom"

const ChildGrade = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex mt-20 min-h-full flex-col justify-center px-6 py-4 lg:px-8">
        <h2 className="mt-2 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome to the Euka Family
        </h2>
        <GradeItem name={"Euka Junior"} />
        <GradeItem name={"Euka Middle"} />
        <GradeItem name={"Euka Senior"} />
      </div>
      <FooterNavitation
        onBackPress={() => {
          console.log("Back")
          navigate("/welcome")
        }}
        onNextPress={() => {
          console.log("Next")
          navigate("/packages")
        }}
      />
    </div>
  )
}

export default ChildGrade
