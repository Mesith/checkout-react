import { renderWithProviders } from "../../utils/test-utils"
import { MemoryRouter } from "react-router-dom"
import { screen } from "@testing-library/react"
import ChildGrade from "../checkout/ChildGrade"
import { GrowthBookProvider } from "@growthbook/growthbook-react"
import { growthbook } from "../../growthbook/growthbook"

const childGradeFeilds = [
  {
    fieldName: "childGrade",
    inputType: "child-grade",
    label: "Child Grade",
    defaultValue: "",
    config: {
      required: "Please Select Grade Level",
    },
    options: [
      { id: "1", name: "Euka Junior", description: "test" },
      { id: "2", name: "Euka Middle", description: "test" },
      { id: "3", name: "Euka Senior", description: "test" },
      { id: "4", name: "Euka Master", description: "test" },
    ],
  },
]

vi.mock("@growthbook/growthbook-react", async () => {
  const actual = await vi.importActual("@growthbook/growthbook-react")
  return {
    ...actual,
    useFeatureValue: () => ({
      childGradeFeilds: childGradeFeilds,
    }),
  }
})

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
    <GrowthBookProvider growthbook={growthbook}>
      <MemoryRouter>
        <ChildGrade />
      </MemoryRouter>
    </GrowthBookProvider>,
  )

  const gradeLevealItems = screen.getAllByTestId("grade-item")
  expect(gradeLevealItems).toHaveLength(childGradeFeilds[0].options.length)
})
