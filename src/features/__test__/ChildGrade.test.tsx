import { renderWithProviders } from "../../utils/test-utils"
import { MemoryRouter } from "react-router-dom"
import { screen } from "@testing-library/react"
import { fields } from "../../data/form"
import ChildGrade from "../checkout/ChildGrade"

it("childGrade component renders the Form componant", () => {
  const { getByTestId } = renderWithProviders(
    <MemoryRouter>
      <ChildGrade />
    </MemoryRouter>,
  )

  const form = getByTestId("dynamic-form")
  expect(form).toBeInTheDocument()
})

it("should render a form with all input fields based on store data", () => {
  renderWithProviders(
    <MemoryRouter>
      <ChildGrade />
    </MemoryRouter>,
  )

  for (const field of fields.childGradeFeilds) {
    const fieldElement = screen.getByLabelText(field.label)
    expect(fieldElement).toBeInTheDocument()
  }
})
