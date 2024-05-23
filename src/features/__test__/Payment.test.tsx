import { screen } from "@testing-library/react"
import Payment from "../checkout/Payment"
import { renderWithProviders } from "../../utils/test-utils"
import { MemoryRouter } from "react-router-dom"

describe("Payment", () => {
  it("renders the payment success message", () => {
    renderWithProviders(
      <MemoryRouter>
        <Payment />
      </MemoryRouter>,
    )
    const successMessage = screen.getByText(/Payment Success!/i)
    expect(successMessage).toBeInTheDocument()
  })

  it("renders the payment success description", () => {
    renderWithProviders(
      <MemoryRouter>
        <Payment />
      </MemoryRouter>,
    )
    const description = screen.getByText(
      /Congrats Your payment was successful/i,
    )
    expect(description).toBeInTheDocument()
  })

  it("renders the 'Enrol another student' button", () => {
    renderWithProviders(
      <MemoryRouter>
        <Payment />
      </MemoryRouter>,
    )
    const enrolButton = screen.getByRole("button", {
      name: /Enrol another student/i,
    })
    expect(enrolButton).toBeInTheDocument()
  })

  it("renders the 'Begin onboarding' button", () => {
    renderWithProviders(
      <MemoryRouter>
        <Payment />
      </MemoryRouter>,
    )
    const onboardingButton = screen.getByRole("button", {
      name: /Begin onboarding/i,
    })
    expect(onboardingButton).toBeInTheDocument()
  })
})
