import { render } from "@testing-library/react"
import PackagesInput from "../packages/PackagesInput"

describe("PackagesInput component", () => {
  const options = [
    {
      id: "option1",
      name: "Option 1",
      priceTag: "$10",
      durationTag: "1 Month",
      features: ["Feature 1", "Feature 2"],
    },
    {
      id: "option2",
      name: "Option 2",
      priceTag: "$20",
      durationTag: "3 Months",
      features: ["Feature 3", "Feature 4"],
    },
    {
      id: "option3",
      name: "Option 3",
      priceTag: "$30",
      durationTag: "6 Months",
      features: ["Feature 5", "Feature 6"],
    },
  ]
  it("should render the correct number of PackageItem components based on options length", () => {
    const { getAllByTestId } = render(
      <PackagesInput options={options} onChange={() => {}} value="" />,
    )

    const packageItems = getAllByTestId("package-item")
    expect(packageItems).toHaveLength(options.length)
  })
})
