import Welcome from "../checkout/Welcome"
import { renderWithProviders } from "../../utils/test-utils"
import { MemoryRouter } from "react-router-dom"
import { screen } from "@testing-library/react"
import { fields } from "../../data/form"

test("welcome component renders the Form componant", () => {
  const { getByTestId } = renderWithProviders(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>,
  )

  const form = getByTestId("dynamic-form")
  expect(form).toBeInTheDocument()
})

test("should render a form with all input fields based on store data", () => {
  renderWithProviders(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>,
  )

  for (const field of fields.welcomeFeilds) {
    const fieldElement = screen.getByLabelText(field.label)
    expect(fieldElement).toBeInTheDocument()
  }
})
