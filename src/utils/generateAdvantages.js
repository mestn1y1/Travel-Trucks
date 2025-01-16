export const generateAdvantages = (camper) => {
  const {
    transmission = "",
    engine = "",
    AC = false,
    TV = false,
    kitchen = false,
    bathroom = false,
    refrigerator = false,
    microwave = false,
    gas = false,
    water = false,
  } = camper;

  return [
    {
      label: "Transmission",
      value: transmission.charAt(0).toUpperCase() + transmission.slice(1),
      iconName: "diagram",
    },
    {
      label: "Air Conditioning",
      value: AC && "AC", // Оставляем только метку без "Yes"
      iconName: "wind",
    },
    {
      label: "Kitchen",
      value: kitchen && "Kitchen", // Оставляем только метку
      iconName: "cup",
    },
    {
      label: "Bathroom",
      value: bathroom && "Bathroom",
      iconName: "shower",
    },
    {
      label: "Refrigerator",
      value: refrigerator && "Refrigerator",
      iconName: "fridge",
    },
    {
      label: "Gas",
      value: gas && "Gas",
      iconName: "gas",
    },
    {
      label: "Water",
      value: water && "Water",
      iconName: "water",
    },
    {
      label: "Microwave",
      value: microwave && "Microwave",
      iconName: "microwave",
    },
    {
      label: "TV",
      value: TV && "TV",
      iconName: "tv",
    },
  ].filter((item) => item.value); // Убираем элементы с пустыми значениями
};
