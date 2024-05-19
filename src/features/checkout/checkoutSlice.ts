import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { fields } from "../../data/form"

export interface CheckoutSliceState {
  value: number
  status: "idle" | "loading" | "failed"
  formFeilds: any
  welcomeFormValues: any
  childGradeFormValues: any
  packageFormValues: any
  currentFormStep: null | "welcome" | "child-grade" | "packages"
}

const initialState: CheckoutSliceState = {
  value: 0,
  status: "idle",
  formFeilds: fields,
  welcomeFormValues: {},
  childGradeFormValues: {},
  packageFormValues: {},
  currentFormStep: null,
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const checkoutSlice = createAppSlice({
  name: "checkout",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    increment: create.reducer(state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    }),
    decrement: create.reducer(state => {
      state.value -= 1
    }),
    setCurrenFormStep: create.reducer(
      (
        state,
        action: PayloadAction<null | "welcome" | "child-grade" | "packages">,
      ) => {
        state.currentFormStep = action.payload
      },
    ),
    cacheWelcomeFormValue: create.reducer(
      (state, action: PayloadAction<any>) => {
        state.welcomeFormValues = action.payload
      },
    ),
    cacheChildGradeFormValue: create.reducer(
      (state, action: PayloadAction<any>) => {
        state.childGradeFormValues = action.payload
      },
    ),
    cachePackageFormValue: create.reducer(
      (state, action: PayloadAction<any>) => {
        state.packageFormValues = action.payload
      },
    ),
    resetChache: create.reducer((state, action: PayloadAction<void>) => {
      state.welcomeFormValues = action.payload
      state.childGradeFormValues = action.payload
      state.packageFormValues = action.payload
      state.currentFormStep = null
    }),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectCount: checkout => checkout.value,
    selectStatus: checkout => checkout.status,
    selectFormFeilds: checkout => checkout.formFeilds,
    selectWelcomeFeildsValues: checkout => checkout.welcomeFormValues,
    selectChildGradeFeildsValues: checkout => checkout.childGradeFormValues,
    selectPackageFeildsValues: checkout => checkout.packageFormValues,
    selectCurrentFormStep: checkout => checkout.currentFormStep,
  },
})

// Action creators are generated for each case reducer function.
export const {
  decrement,
  increment,
  incrementByAmount,
  cacheWelcomeFormValue,
  cacheChildGradeFormValue,
  cachePackageFormValue,
  setCurrenFormStep,
  resetChache,
} = checkoutSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
  selectCount,
  selectStatus,
  selectFormFeilds,
  selectWelcomeFeildsValues,
  selectChildGradeFeildsValues,
  selectPackageFeildsValues,
  selectCurrentFormStep,
} = checkoutSlice.selectors
