import { renderHook } from "@testing-library/react"
import { MemoryRouter, Routes, Route, useNavigate } from "react-router-dom"
import usePreviousLocation from "../usePreviousLocation"
import { act, useEffect } from "react"

// utility function to simulate navigation
const Navigate = ({ to }: { to: string }) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  }, [to, navigate])
  return null
}

describe("usePreviousLocation test", () => {
  test("should return null on initial render", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
    )

    const { result } = renderHook(() => usePreviousLocation(), { wrapper })

    expect(result.current).toBeNull()
  })

  test("should return the previous location after location changes", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter initialEntries={["/initial"]}>
        <Routes>
          <Route path="/initial" element={children} />
          <Route path="/next" element={<div />} />
        </Routes>
      </MemoryRouter>
    )
    const { result, rerender } = renderHook(() => usePreviousLocation(), {
      wrapper,
    })

    act(() => {
      rerender({
        children: <Navigate to="/next" />,
      })
    })
    expect(result.current?.pathname).toBe("/initial")
  })
})
