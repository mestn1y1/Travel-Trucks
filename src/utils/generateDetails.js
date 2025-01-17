export const generateDetails = (camper) => {
  const {
    form = "",
    length = "",
    width = "",
    height = "",
    tank = "",
    engine = "",
    consumption = "",
  } = camper;

  const formatForm = (form) => {
    switch (form) {
      case "fullyIntegrated":
        return "Fully integrated";
      case "alcove":
        return "Alcove";
      case "panelTruck":
        return "Panel truck";
      default:
        return form.charAt(0).toUpperCase() + form.slice(1);
    }
  };

  const formattedLength =
    length && `${parseFloat(length)} ${length.replace(/^[0-9.]+/, "")}`;
  const formattedWidth =
    width && `${parseFloat(width)} ${width.replace(/^[0-9.]+/, "")}`;
  const formattedHeight =
    height && `${parseFloat(height)} ${height.replace(/^[0-9.]+/, "")}`;
  const formattedTank = tank && `${parseInt(tank)} ${tank.replace(/^\d+/, "")}`;
  const formattedConsumption =
    consumption &&
    `${parseFloat(consumption)}${consumption.replace(/^[0-9.]+/, "")}`;
  const filterValue = (value) => {
    return value !== "0" && value !== "";
  };

  return [
    {
      label: "Form",
      value: filterValue(form) ? formatForm(form) : null,
    },
    {
      label: "Length",
      value: filterValue(formattedLength) ? formattedLength : null,
    },
    {
      label: "Width",
      value: filterValue(formattedWidth) ? formattedWidth : null,
    },
    {
      label: "Height",
      value: filterValue(formattedHeight) ? formattedHeight : null,
    },
    {
      label: "Tank",
      value: filterValue(formattedTank) ? formattedTank : null,
    },
    {
      label: "Engine",
      value: filterValue(engine)
        ? engine.charAt(0).toUpperCase() + engine.slice(1)
        : null,
    },
    {
      label: "Consumption",
      value: filterValue(formattedConsumption) ? formattedConsumption : null,
    },
  ].filter((item) => item.value !== null);
};
