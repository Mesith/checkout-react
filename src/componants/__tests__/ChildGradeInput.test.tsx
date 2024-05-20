import { render, fireEvent } from "@testing-library/react"
import ChildGradeInput from "../ChildGradeInput"
import { vi } from "vitest"

describe("ChildGradeInput component", () => {
  const options = [
    { id: "option1", name: "Option 1", description: "Description 1" },
    { id: "option2", name: "Option 2", description: "Description 2" },
  ]
  const label = "Select an option"
  it("Should render the number of items correctly", () => {
    const { getAllByTestId } = render(
      <ChildGradeInput
        options={options}
        onChange={() => {}}
        value=""
        label={label}
      />,
    )

    const customItems = getAllByTestId("grade-item")
    expect(customItems).toHaveLength(options.length)
  })

  it("Should call the onChange function with the selected option id", () => {
    const mockOnChange = vi.fn()

    const { getByText } = render(
      <ChildGradeInput
        options={options}
        onChange={mockOnChange}
        value=""
        label={label}
      />,
    )

    const option1Button = getByText("Option 1")
    fireEvent.click(option1Button)

    expect(mockOnChange).toHaveBeenCalledTimes(1)
    expect(mockOnChange).toHaveBeenCalledWith("option1")
  })

  it("Should highlight the selected option visually", () => {

    const { getByTestId } = render(
      <ChildGradeInput
        options={options}
        onChange={() => {}}
        value="option2"
        label={label}
      />,
    )

    const option1Button = getByTestId("option1")
    const option2Button = getByTestId("option2")

    expect(option1Button).not.toHaveClass("border-2 border-yellow-300")
    expect(option2Button).toHaveClass("border-2 border-yellow-300")
  })
})
