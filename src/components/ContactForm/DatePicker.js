import React, { useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({ date, setDate, value, setValue }) => {
  useEffect(() => {
    const futureDays = 4;
    const date = new Date();
    date.setDate(date.getDate() + futureDays);
    setDate(date);
  }, [setDate]);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <input type="hidden" name="Date" value={value.startDate} />
      <Datepicker
        asSingle={true}
        useRange={false}
        placeholder={"Date"}
        minDate={date}
        value={value}
        onChange={handleValueChange}
        popoverDirection="up"
        inputClassName={`relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300  rounded-lg tracking-wide font-light text-sm  focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20 bg-white placeholder-gray-400`}
      />
    </>
  );
};

export default DatePicker;
