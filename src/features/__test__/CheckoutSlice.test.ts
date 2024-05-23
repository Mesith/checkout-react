import { describe, beforeEach, it, expect } from "vitest"
import type { AppStore } from "../../app/store"
import { makeStore } from "../../app/store"
import { fields } from "../../data/form"
import type { CheckoutSliceState } from "../checkout/CheckoutSlice"
import {
  checkoutSlice,
  cacheWelcomeFormValue,
  cacheChildGradeFormValue,
  cachePackageFormValue,
  resetChache,
  selectChildGradeFeildsValues,
  selectCurrentFormStep,
  selectFormFeilds,
  selectPackageFeildsValues,
  selectWelcomeFeildsValues,
  setCurrenFormStep,
} from "../checkout/CheckoutSlice"

interface LocalTestContext {
  store: AppStore
}

describe<LocalTestContext>("checkout reducer", () => {
  beforeEach<LocalTestContext>(context => {
    const initialState: CheckoutSliceState = {
      formFeilds: fields,
      welcomeFormValues: {},
      childGradeFormValues: {},
      packageFormValues: {},
      currentFormStep: null,
    }

    const store = makeStore({ checkout: initialState })
    context.store = store
  })

  // Initial State Tests
  it("should handle initial state", () => {
    expect(checkoutSlice.reducer(undefined, { type: "unknown" })).toStrictEqual(
      {
        formFeilds: fields,
        welcomeFormValues: {},
        childGradeFormValues: {},
        packageFormValues: {},
        currentFormStep: null,
      },
    )
  })

  it("should have initial form fields", ({ store }: any) => {
    expect(selectFormFeilds(store.getState())).toBe(fields)
  })

  // Form Value Caching Tests
  it("should cache welcome form values", ({ store }: any) => {
    const testValues: any = {
      email: "john.doe@example.com",
      age: 27,
      keepMeForOffers: true,
    }
    store.dispatch(cacheWelcomeFormValue(testValues))
    expect(selectWelcomeFeildsValues(store.getState())).toBe(testValues)
  })

  it("should cache child grade form values", ({ store }: any) => {
    const testValues: any = { childGrade: "1" }
    store.dispatch(cacheChildGradeFormValue(testValues))
    expect(selectChildGradeFeildsValues(store.getState())).toBe(testValues)
  })

  it("should cache package form values", ({ store }: any) => {
    const testValues: any = { package: "2" }
    store.dispatch(cachePackageFormValue(testValues))
    expect(selectPackageFeildsValues(store.getState())).toBe(testValues)
  })

  it("should set current form step", ({ store }: any) => {
    store.dispatch(setCurrenFormStep("child-grade"))
    expect(selectCurrentFormStep(store.getState())).toBe("child-grade")
  })

  it("should reset all cached form values and step", ({ store }: any) => {
    const initialValues = { email: "mesith@gmail.com", age: 36 }

    store.dispatch(cacheWelcomeFormValue(initialValues as any))
    store.dispatch(setCurrenFormStep("child-grade"))
    store.dispatch(cacheChildGradeFormValue({ childGrade: "1" } as any))
    store.dispatch(cachePackageFormValue({ package: "2" } as any))

    store.dispatch(resetChache())

    expect(selectWelcomeFeildsValues(store.getState())).toEqual({})
    expect(selectChildGradeFeildsValues(store.getState())).toEqual({})
    expect(selectPackageFeildsValues(store.getState())).toEqual({})
    expect(selectCurrentFormStep(store.getState())).toBeNull()
  })
})
