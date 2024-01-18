export const categoryOptions = [
  { value: "hair_care", label: "Hair care" },
  { value: "skin_care", label: "Skin care" },
  { value: "body_care", label: "Body Care" },
];

export const subCategoryOptions = {
  hair_care: [
    { value: "hair_oil", label: "Hair Oil" },
    { value: "hair_mask", label: "Hair Mask" },
  ],

  skin_care: [
    { value: "skin_cream", label: "Skin Cream" },
    { value: "skin_lotion", label: "Skin Lotion" },
  ],

  body_care: [
    { value: "body_lotion", label: "Body Lotion" },
    { value: "body_massage", label: "Body Massage" },
  ],
};

export const AsinOptions = {
  hair_care: {
    hair_oil: [
      { value: "kesh_king", label: "Kesh King" },
      { value: "coconut_oil", label: "Coconut Oil" },
    ],
  },
  skin_care: {
    skin_cream: [
      {
        value: "fair_and_lovely",
        label: "Fair and lovely",
      },
      {
        value: "fair_handsome",
        label: "Fair Handsome",
      },
    ],
    skin_lotion: [
      { value: "neutrogena_lotion", label: "Neutrogena Lotion" },
      { value: "wrinkle_repair", label: "Neutrogena Wrinkle Repair" },
    ],
  },

  body_care: {
    body_lotion: [
      {
        value: "moisture",
        label: "Neutrogena Moisture",
      },
      {
        value: "cleanser",
        label: "Cleanser",
      },
    ],
    body_massage: [
      { value: "olive_oil", label: "Olive Oil" },
      { value: "hydro_boost", label: "Hydro Boost" },
    ],
  },
};

export const countryOptions = {
  hair_care: {
    hair_oil: {
      kesh_king: [
        { value: "country_1", label: "India" },
        { value: "country_2", label: "America" },
      ],
    },
  },
};

export const getSubCategoryOptions = (parentValues, subCategoryList) => {
  const filteredOptions = [];
  for (const value of parentValues) {
    filteredOptions.push(subCategoryOptions[value.value]);
  }

  return filteredOptions.flat(1);
};

export const getAsinOptions = (parentValues, childValues) => {
  const filteredOptions = [];
  for (const parentValue of parentValues) {
    for (const childValue of childValues) {
      const obj = AsinOptions[parentValue?.value]?.[childValue?.value] || [];
      filteredOptions.push(...obj);
    }
  }
  return filteredOptions.flat(1);
};

export const getCountryOptions = (parentValues, childValues, grandChilds) => {
  const filteredOptions = [];

  for (const parentValue of parentValues) {
    for (const childValue of childValues) {
      for (const grandChild of grandChilds) {
        const obj =
          countryOptions[parentValue.value]?.[childValue?.value]?.[
            grandChild?.value
          ] || [];
        filteredOptions.push(...obj);
      }
    }
  }

  return filteredOptions.flat(1);
};
