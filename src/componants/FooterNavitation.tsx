import { Button } from "flowbite-react"
import React from "react"

const FooterNavitation = ({
  onBackPress,
  onNextPress,
}: {
  onBackPress: () => void
  onNextPress: () => void
}) => {
  return (
    <div className="fixed left-0 bottom-0 w-full h-20 bg-white border-gray-200 dark:bg-gray-900 flex justify-between items-center px-8">
      <Button
        onClick={onBackPress}
        outline
        className="w-32 border-gray-600 border-2"
      >
        Go Back
      </Button>
      <Button onClick={onNextPress} label="2" className="bg-gray-900 w-32">
        Next
      </Button>
    </div>
  )
}

export default FooterNavitation
