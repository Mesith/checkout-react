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
        // pattern: {
        //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        //   message: "Please enter a valid email address",
        // },
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
      label: "Child Grade",
      defaultValue: "",
      config: {
        required: "Please Select Grade Level",
      },
      options: [
        { id: "1", name: "Euka Junior", description: "test" },
        { id: "2", name: "Euka Middle", description: "test" },
        { id: "3", name: "Euka Senior", description: "test" },
        { id: "4", name: "Euka Master", description: "test" },
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
          features: [
            "Best for tempary home schooling",
            "90 days access",
            "2 terms limit",
            "No add-ons available",
          ],
        },
        {
          id: "3",
          name: "Life Time",
          priceTag: "676 AUD per annum",
          durationTag: "3 months - 169 AUD",
          features: [
            "Best value for full-time home schooling",
            "365 days of access",
            "8 term limit",
            "Range of add-on available",
          ],
        },
        {
          id: "2",
          name: "Full Year",
          priceTag: "676 AUD per annum",
          durationTag: "3 months - 169 AUD",
          features: [
            "Best value for full-time home schooling",
            "365 days of access",
            "8 term limit",
            "Range of add-on available",
          ],
        },
      ],
    },
  ],
}
