import { render, fireEvent } from "@testing-library/react"
import CheckBox from "../CheckBox"
import { vi } from "vitest"

describe("CheckBox component", () => {
  it("Should render the label and checkbox correctly", () => {
    const { getByText } = render(
      <CheckBox
        id="test-checkbox"
        label="Test Label"
        value={false}
        onChange={() => {}}
      />,
    )

    expect(getByText("Test Label")).toBeInTheDocument()
  })

  it("Should call the onChange function when clicked", () => {
    const mockOnChange = vi.fn()
    const { getByLabelText } = render(
      <CheckBox
        id="test-checkbox"
        label="Test Label"
        value={false}
        onChange={mockOnChange}
      />,
    )

    const checkbox = getByLabelText("Test Label")
    fireEvent.click(checkbox)

    expect(mockOnChange).toHaveBeenCalledTimes(1)
    expect(mockOnChange).toHaveBeenCalledWith(true)
  })

  it("Should render the checkbox as checked when value is true", () => {
    const { getByLabelText } = render(
      <CheckBox
        id="test-checkbox"
        label="Test Label"
        value={true}
        onChange={() => {}}
      />,
    )

    const checkbox = getByLabelText("Test Label")
    expect(checkbox).toBeChecked()
  })

})
