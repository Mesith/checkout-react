import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface CheckoutSliceState {
  welcomeFormValues: any
  childGradeFormValues: any
  packageFormValues: any
  currentFormStep: null | "welcome" | "child-grade" | "packages" 
}

const initialState: CheckoutSliceState = {
  welcomeFormValues: {},
  childGradeFormValues: {},
  packageFormValues: {},
  currentFormStep: null,
}

export const checkoutSlice = createAppSlice({
  name: "checkout",
  initialState,
  reducers: create => ({
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
      state.welcomeFormValues = {}
      state.childGradeFormValues = {}
      state.packageFormValues = {}
      state.currentFormStep = null
    }),
  }),

  selectors: {
    selectWelcomeFeildsValues: checkout => checkout.welcomeFormValues,
    selectChildGradeFeildsValues: checkout => checkout.childGradeFormValues,
    selectPackageFeildsValues: checkout => checkout.packageFormValues,
    selectCurrentFormStep: checkout => checkout.currentFormStep,
  },
})

export const {
  cacheWelcomeFormValue,
  cacheChildGradeFormValue,
  cachePackageFormValue,
  setCurrenFormStep,
  resetChache,
} = checkoutSlice.actions

export const {
  selectWelcomeFeildsValues,
  selectChildGradeFeildsValues,
  selectPackageFeildsValues,
  selectCurrentFormStep,
} = checkoutSlice.selectors
