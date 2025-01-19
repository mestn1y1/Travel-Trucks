import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  setLocation,
  setFormType,
  setDetails,
  clearFilters,
} from "../../redux/filter/slice";
import { fetchFilteredCampers } from "../../redux/campers/operations";
import { cities, labelArr, formTypeArray } from "./arrayForInput";
import css from "./Filter.module.css";
import Button from "../Button/Button";
import { selectFilter } from "../../redux/filter/selectors";
import { Icon } from "../Icon/Icon";

const validationSchema = Yup.object({
  location: Yup.string()
    .min(4, "Location must be at least 4 characters.")
    .max(20, "Location cannot be more than 20 characters.")
    .matches(/^[A-Za-z\s,]+$/, "Location should only contain Latin letters.")
    .transform((value) => {
      return value.replace(/\b\w/g, (char) => char.toUpperCase());
    }),
});

export default function Filter() {
  const dispatch = useDispatch();
  const {
    location,
    form,
    kitchen = false,
    bathroom = false,
    TV = false,
    water = false,
    gas = false,
  } = useSelector(selectFilter);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredCities, setFilteredCities] = useState(cities);

  const initialValues = {
    location,
    form,
    kitchen,
    bathroom,
    TV,
    water,
    gas,
  };

  const handleSubmit = (values, actions) => {
    const filterData = Object.entries(values)
      .filter(([key, value]) => value)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    if (Object.keys(filterData).length === 0) {
      toast.error("Please select at least one filter before submitting.", {
        autoClose: 2000,
      });
      return;
    }

    dispatch(setLocation(filterData.location || ""));
    dispatch(setFormType(filterData.form || ""));
    dispatch(fetchFilteredCampers({ filters: filterData }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, setFieldValue }) => {
        const handleIconClick = () => {
          setIsDropdownOpen((prev) => !prev);
          setFilteredCities(cities);
        };

        const handleInputChange = (e) => {
          const searchText = e.target.value.toLowerCase();
          setFilteredCities(
            cities.filter((city) =>
              city.name.toLowerCase().includes(searchText)
            )
          );
          setFieldValue("location", e.target.value);
        };

        const handleCitySelect = (cityName) => {
          setFieldValue("location", cityName);
          setIsDropdownOpen(false);
        };

        return (
          <Form className={css.filterForm}>
            <div className={css.labelInput}>
              <label htmlFor="location" className={css.locationTitle}>
                Location
              </label>
              <div className={css.wrapperInput}>
                <div className={css.iconWrapper} onClick={handleIconClick}>
                  <Icon iconName="map" className={css.iconMap} />
                </div>
                <Field
                  id="location"
                  name="location"
                  placeholder="City"
                  className={css.locationInput}
                  onChange={handleInputChange}
                  autoComplete="off"
                />
                {isDropdownOpen && (
                  <ul className={css.dropdown}>
                    {filteredCities.map((city) => (
                      <li
                        key={city.id}
                        className={css.dropdownItem}
                        onClick={() => handleCitySelect(city.name)}
                      >
                        {city.name}
                      </li>
                    ))}
                  </ul>
                )}
                <ErrorMessage
                  name="location"
                  component="div"
                  className={css.errorStyle}
                />
              </div>
            </div>

            <div>
              <h2 className={css.headerTitle}>Filters</h2>
              <h3 className={css.fieldTitle}>Vehicle equipment</h3>
              <hr className={css.horizontLine} />
              <ul className={css.checkBoxFilters}>
                {labelArr.map(({ label, name, iconName }) => (
                  <li key={name} className={css.checkboxWrapper}>
                    <label className={css.checkboxLabel}>
                      <Field
                        type="checkbox"
                        name={name}
                        className={css.checkbox}
                        id={name}
                      />
                      <div className={css.filterBox}>
                        <Icon iconName={iconName} className={css.iconChekBox} />
                        <p>{label}</p>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={css.fieldTitle}>Vehicle form</h3>
              <hr className={css.horizontLine} />
              <ul className={css.formTypelist}>
                {formTypeArray.map(({ name, label, iconName }) => (
                  <li key={name} className={css.radioWrapper}>
                    <label htmlFor={name} className={css.radioLabel}>
                      <Field
                        type="radio"
                        name="form"
                        value={name}
                        className={css.radio}
                        id={name}
                      />
                      <div className={css.filterBox}>
                        <Icon iconName={iconName} className={css.iconChekBox} />
                        <p>{label}</p>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className={css.buttonGroup}>
              <Button text="Search" type="submit" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
