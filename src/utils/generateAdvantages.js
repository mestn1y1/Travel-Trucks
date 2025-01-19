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
    radio = false, // Добавляем радио
  } = camper;

  return [
    {
      label: "Transmission",
      value: transmission.charAt(0).toUpperCase() + transmission.slice(1),
      iconName: "diagram",
    },
    {
      label: "Air Conditioning",
      value: AC && "AC",
      iconName: "wind",
    },
    {
      label: "TV",
      value: TV && "TV",
      iconName: "tv",
    },
    {
      label: "",
      value: engine.charAt(0).toUpperCase() + engine.slice(1),
      iconName: "petrol",
    },
    {
      label: "Bathroom",
      value: bathroom && "Bathroom",
      iconName: "shower",
    },
    {
      label: "Gas",
      value: gas && "Gas",
      iconName: "gas",
    },
    {
      label: "Kitchen",
      value: kitchen && "Kitchen",
      iconName: "cup",
    },
    {
      label: "Refrigerator",
      value: refrigerator && "Refrigerator",
      iconName: "fridge",
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
      label: "Radio",
      value: radio && "Radio",
      iconName: "radio",
    },
  ].filter((item) => item.value);
};
