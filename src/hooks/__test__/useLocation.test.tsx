import { renderHook } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { useLocationEffect } from "../useLocation"

describe("useLocationEffect", () => {
  test("calls the callback with the current location", () => {
    const callback = vi.fn()

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
    )

    renderHook(() => useLocationEffect(callback), { wrapper })

    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        pathname: "/",
      }),
    )
  })

  test("calls the callback with the updated location on navigation", () => {
    const callback = vi.fn()

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter initialEntries={["/next"]}>
        <Routes>
          <Route path="/initial" element={null} />
          <Route path="/next" element={children} />
        </Routes>
      </MemoryRouter>
    )
    renderHook(() => useLocationEffect(callback), { wrapper })

    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        pathname: "/next",
      }),
    )
  })
})
