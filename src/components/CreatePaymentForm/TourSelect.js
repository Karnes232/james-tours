import React from "react";
import Select from "react-select";
const TourSelect = ({ tourList, state, setState }) => {
  let options = [];
  tourList.map((tour) => {
    let option = {
      value: tour.node.name,
      label: tour.node.name,
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
        tour: e.value,
      });
    } else {
      setState({
        ...state,
        tour: "",
      });
    }
  }

  return (
    <>
      <div className="relative mb-2 w-full group">
        <Select
          isClearable
          options={options}
          className="contactFormInput"
          classNamePrefix="select"
          isSearchable={true}
          name="tourSelect"
          placeholder="Tour"
          styles={style}
          required
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default TourSelect;
