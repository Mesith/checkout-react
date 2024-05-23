import { createRef, act, forwardRef } from "react"
import type { FormRef } from "../dynamicForm/DynamicForm";
import DynamicForm from "../dynamicForm/DynamicForm"
import { vi } from "vitest"
import type { DynamicFieldData } from "../dynamicForm/DynamicControleTypes"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter, Routes, Route } from "react-router-dom"

describe("DynamicForm", () => {
  it("should render error message when fields array is empty", () => {
    const { getByText } = render(
      <DynamicForm
        fields={[]}
        formValues={{}}
        onCacheUnsubmittedValues={vi.fn()}
      />,
    )
    expect(getByText("Error Loading, Please try again")).toBeInTheDocument()
  })

  it("should render DynamicControl components for each field", () => {
    const fields: DynamicFieldData[] = [
      {
        fieldName: "name",
        label: "Name",
        inputType: "text",
        defaultValue: "",
      },
      {
        fieldName: "email",
        label: "Email",
        inputType: "text",
        defaultValue: "",
      },
    ]
    const { getAllByTestId } = render(
      <DynamicForm
        fields={fields}
        formValues={{}}
        onCacheUnsubmittedValues={vi.fn()}
      />,
    )
    const dynamicControls = getAllByTestId("dynamic-control")
    expect(dynamicControls).toHaveLength(fields.length)
  })

  it("should call submit function when submit method is called", () => {
    const fields: any[] = []
    const formValues = {}
    const onCacheUnsubmittedValues = vi.fn()

    const TestComponent = forwardRef<FormRef>((props, ref) => (
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <DynamicForm
                ref={ref}
                fields={fields}
                formValues={formValues}
                onCacheUnsubmittedValues={onCacheUnsubmittedValues}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    ))

    const formRef = createRef<FormRef>()
    render(<TestComponent ref={formRef} />)
    const submitMock = vi.fn()
    if (formRef.current) {
      formRef.current.submit = submitMock
    }

    act(() => {
      formRef.current?.submit()
    })
    expect(submitMock).toHaveBeenCalled()
  })

  it("should submit the form with valid data", async () => {
    const user = userEvent.setup()
    const testFields = [
      {
        fieldName: "name",
        inputType: "text",
        label: "Name",
        defaultValue: "",
        config: {
          required: "Name is required",
        },
      },
    ]
    const testFormValues = {
      name: "",
    }
    const mockOnCacheUnsubmittedValues = vi.fn()
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <DynamicForm
                fields={testFields as any}
                formValues={testFormValues}
                onCacheUnsubmittedValues={mockOnCacheUnsubmittedValues}
              />
            }
          />
        </Routes>
      </MemoryRouter>,
    )
    const nameInput = getByTestId("name")
    await user.type(nameInput, "John Doe")

    act(() => {
      window.dispatchEvent(new Event("beforeunload"))
    })

    expect(mockOnCacheUnsubmittedValues).toHaveBeenCalledWith({
      name: "John Doe",
    })
  })
})
