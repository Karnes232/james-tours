import React, { useState } from "react";
import ClientInfo from "./ClientInfo";
import HotelSelect from "./HotelSelect";
import DatePicker from "./DatePicker";
import TourSelect from "./TourSelect";

const Form = ({ hotelList, tourList }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    guestCount: 1,
    tour: "",
    hotel: "",
    date: "",
  });
  const [link, setLink] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    let newEmail = state.email.replaceAll("@", "%40")
    let newName = state.name.replaceAll(" ", "+")
    let newTour = state.tour.replaceAll(" ", "+")
    let newHotel = state.hotel.replaceAll(" ", "+")
    console.log(document.location.origin);
    setLink(`${document.location.origin}/payments/?name=${newName}&email=${newEmail}&guestCount=${state.guestCount}&tour=${newTour}&hotel=${newHotel}&date=${state.date}`)
  };

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }
  return (
    <>
      <form
        name="Create Payment"
        id="CreatePayment"
        className="w-64 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-10"
        action=""
        method="POST"
        onSubmit={handleSubmit}
      >
        <ClientInfo
          state={state}
          handleChange={handleChange}
          setState={setState}
        />
        <TourSelect tourList={tourList} state={state} setState={setState} />
        <HotelSelect hotelList={hotelList} state={state} setState={setState} />
        <DatePicker state={state} setState={setState} />
        <button type="submit">Submit</button>
      </form>
      <div className="whitespace-pre-wrap break-words w-96 max-w-96 mx-auto h-56">{link}</div>
    </>
  );
};

export default Form;
