import { renderHook } from "@testing-library/react"
import { useCacheUnsubmittedValues } from "../useCacheUnSubmitValues"
import { act } from "react"

describe("useCacheUnsubmittedValues", () => {
  test("should call onCacheUnsubmittedValues with cached values on window beforeunload event", () => {
    const onCacheUnsubmittedValues = vi.fn()
    const { result } = renderHook(() =>
      useCacheUnsubmittedValues(onCacheUnsubmittedValues),
    )
    const cacheValueRef = result.current

    const cachedValues = { name: "John Doe" }
    cacheValueRef.current = cachedValues

    const beforeUnloadEvent = new Event("beforeunload")
    act(() => {
      window.dispatchEvent(beforeUnloadEvent)
    })

    expect(onCacheUnsubmittedValues).toHaveBeenCalledWith(cachedValues)
  })

  test("should not call onCacheUnsubmittedValues if no values are cached", () => {
    const onCacheUnsubmittedValues = vi.fn()
    renderHook(() => useCacheUnsubmittedValues(onCacheUnsubmittedValues))

    const beforeUnloadEvent = new Event("beforeunload")
    act(() => {
      window.dispatchEvent(beforeUnloadEvent)
    })

    expect(onCacheUnsubmittedValues).not.toHaveBeenCalled()
  })

  test("should remove event listener on unmount", () => {
    const onCacheUnsubmittedValues = vi.fn()
    const { unmount } = renderHook(() =>
      useCacheUnsubmittedValues(onCacheUnsubmittedValues),
    )

    const beforeUnloadEvent = new Event("beforeunload")
    unmount()
    act(() => {
      window.dispatchEvent(beforeUnloadEvent)
    })

    expect(onCacheUnsubmittedValues).not.toHaveBeenCalled()
  })
})
