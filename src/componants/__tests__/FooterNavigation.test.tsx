import { render, fireEvent } from "@testing-library/react"
import FooterNavigation from "../FooterNavitation"
it("clicking Back button calls onBackPress prop", () => {
  const mockOnBackPress = vi.fn()
  const mockOnNextPress = vi.fn()

  const { getByText } = render(
    <FooterNavigation
      onBackPress={mockOnBackPress}
      onNextPress={mockOnNextPress}
    />,
  )

  const backButton = getByText(/Go Back/i)
  fireEvent.click(backButton)

  expect(mockOnBackPress).toHaveBeenCalledTimes(1)
})

it("clicking Next button calls onNextPress prop", () => {
  const mockOnBackPress = vi.fn()
  const mockOnNextPress = vi.fn()

  const { getByText } = render(
    <FooterNavigation
      onBackPress={mockOnBackPress}
      onNextPress={mockOnNextPress}
    />,
  )

  const nextButton = getByText(/Next/i)
  fireEvent.click(nextButton)

  expect(mockOnNextPress).toHaveBeenCalledTimes(1)
})
