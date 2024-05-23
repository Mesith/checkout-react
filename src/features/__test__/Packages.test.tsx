import { renderWithProviders } from "../../utils/test-utils"
import { MemoryRouter } from "react-router-dom"
import { screen } from "@testing-library/react"
import { GrowthBookProvider } from "@growthbook/growthbook-react"
import { growthbook } from "../../growthbook/growthbook"
import Packages from "../checkout/Packages"

const packageFeilds = [
  {
    fieldName: "package",
    inputType: "package",
    label: "",
    defaultValue: "",
    config: {
      required: "Please Select Package",
    },
    options: [
      {
        id: "1",
        name: "One Term",
        priceTag: "676 AUD per annum",
        durationTag: "3 months - 169 AUD",
        features: [
          "Best for tempary home schooling",
          "90 days access",
          "2 terms limit",
          "No add-ons available",
        ],
      },
      {
        id: "3",
        name: "Life Time",
        priceTag: "676 AUD per annum",
        durationTag: "3 months - 169 AUD",
        features: [
          "Best value for full-time home schooling",
          "365 days of access",
          "8 term limit",
          "Range of add-on available",
        ],
      },
      {
        id: "2",
        name: "Full Year",
        priceTag: "676 AUD per annum",
        durationTag: "3 months - 169 AUD",
        features: [
          "Best value for full-time home schooling",
          "365 days of access",
          "8 term limit",
          "Range of add-on available",
        ],
      },
    ],
  },
]

vi.mock("@growthbook/growthbook-react", async () => {
  const actual = await vi.importActual("@growthbook/growthbook-react")
  return {
    ...actual,
    useFeatureValue: () => ({
      packageFeilds: packageFeilds,
    }),
  }
})

it("childGrade component renders the Form componant", () => {
  const { getByTestId } = renderWithProviders(
    <MemoryRouter>
      <Packages />
    </MemoryRouter>,
  )

  const form = getByTestId("dynamic-form")
  expect(form).toBeInTheDocument()
})

it("should render a form with all input fields based on store data", () => {
  renderWithProviders(
    <GrowthBookProvider growthbook={growthbook}>
      <MemoryRouter>
        <Packages />
      </MemoryRouter>
    </GrowthBookProvider>,
  )

  const gradeLevealItems = screen.getAllByTestId("package-item")
  expect(gradeLevealItems).toHaveLength(packageFeilds[0].options.length)
})
