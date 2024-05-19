import type { DynamicFeilds } from "../componants/dynamicForm/DynamicControleTypes"

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
  childGradeFeilds: [
    {
      fieldName: "childGrade",
      inputType: "childgrade",
      label: "",
      defaultValue: "",
      config: {
        required: "Please Select Grade Level",
      },
      options: [
        { id: "1", name: "test1", description: "test" },
        { id: "2", name: "test1", description: "test" },
        { id: "3", name: "test1", description: "test" },
        { id: "4", name: "test4", description: "test" },
      ],
    },
  ],
  packageFeilds: [
    {
      fieldName: "package",
      inputType: "package",
      label: "",
      defaultValue: "",
      config: {
        required: "Please Select Package",
      },
      options: [
        {
          id: "1",
          name: "One Term",
          priceTag: "676 AUD per annum",
          durationTag: "3 months - 169 AUD",
          features: ["test1", "test2 test3"],
        },
        //   { name: "package2", priceTag: "676 AUD per annum", durationTag: "12 months" },
        {
          id: "2",
          name: "Full Year",
          priceTag: "676 AUD per annum",
          durationTag: "3 months - 169 AUD",
          features: ["test1", "test2 test3", "test 4,", "tesd test features"],
        },
      ],
    },
  ],
}
