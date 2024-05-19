import type {
  DynamicFeilds,
  DynamicFieldData,
} from "../componants/dynamicForm/DynamicControleTypes"

export const fields: DynamicFeilds = {
  welcomeFeilds: [
    {
      fieldName: "email",
      inputType: "text",
      label: "Email Address",
      defaultValue: "",
      config: {
        required: "Email Required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Please enter a valid email address",
        },
      },
    },
    {
      fieldName: "age",
      inputType: "number",
      label: "Age",
      defaultValue: 18,
    },
    {
      fieldName: "language",
      inputType: "select",
      label: "Language",
      options: [
        { value: "english", label: "English" },
        { value: "french", label: "French" },
      ],
      defaultValue: "english",
    },
    {
      fieldName: "keepMeForOffers",
      inputType: "checkbox",
      label: "Keep me up to date on news and educational offers",
      defaultValue: false,
      config: {
        required: "Required",
      },
    },
    {
      fieldName: "address",
      inputType: "text",
      label: "Address",
      defaultValue: "",
    },
  ],
  childGradeFeilds: [],
  packageFeilds: [],
}
