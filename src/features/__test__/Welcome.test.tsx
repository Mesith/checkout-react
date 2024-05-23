/* eslint-disable @typescript-eslint/no-unused-expressions */
import { renderWithProviders } from "../../utils/test-utils"
import { MemoryRouter } from "react-router-dom"
import { screen } from "@testing-library/react"
import { vi } from "vitest"
import { GrowthBookProvider } from "@growthbook/growthbook-react"
import Welcome from "../checkout/Welcome"
import { growthbook } from "../../growthbook/growthbook"

const welcomeFeilds = [
  {
    fieldName: "name",
    inputType: "text",
    label: "Name",
    defaultValue: "",
    config: {
      required: "Name is required",
    },
  },
  {
    fieldName: "email",
    inputType: "text",
    label: "Email",
    defaultValue: "",
    config: {
      required: "Email is required",
    },
  },
]

vi.mock("@growthbook/growthbook-react", async () => {
  const actual = await vi.importActual("@growthbook/growthbook-react")
  return {
    ...actual,
    useFeatureValue: () => ({
      welcomeFeilds: welcomeFeilds,
    }),
  }
})

test("welcome component renders the Form componant", () => {
  const { getByTestId } = renderWithProviders(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>,
  )

  const form = getByTestId("dynamic-form")
  expect(form).toBeInTheDocument()
})

test("should render a form with all input fields based on A/B data", () => {
  renderWithProviders(
    <GrowthBookProvider growthbook={growthbook}>
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
      ,
    </GrowthBookProvider>,
  )

  for (const field of welcomeFeilds) {
    const fieldElement = screen.getByLabelText(field.label)
    expect(fieldElement).toBeInTheDocument()
  }
})
