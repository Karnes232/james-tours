import React from "react";
import CreatableSelect from "react-select/creatable";
const HotelSelect = ({ hotelList, state, setState }) => {
  let options = [];
  hotelList.map((hotel) => {
    let option = {
      value: hotel,
      label: hotel,
    };
    return options.push(option);
  });
  const style = {
    control: (base) => ({
      ...base,
      border: 1,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };

  function handleChange(e) {
    if (e !== null) {
      setState({
        ...state,
        hotel: e.value,
      });
    } else {
      setState({
        ...state,
        hotel: "",
      });
    }
  }

  return (
    <>
      <div className="relative mb-2 w-full group">
        <CreatableSelect
          isClearable
          options={options}
          className="contactFormInput"
          classNamePrefix="select"
          isSearchable={true}
          name="hotelSelect"
          placeholder="Hotel"
          styles={style}
          required
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default HotelSelect;
