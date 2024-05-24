import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import MoreInfo from "./MoreInfo";
import { motion } from "framer-motion";
import HotelSelect from "./HotelSelect";
import TourCard from "./TourCard";

const ReservationContactForm = ({ formName, url, hotelList, tour }) => {
  const [name, setName] = useState("");
  return (
    <>
      <form
        name={formName}
        method="POST"
        action={`${url}${name}`}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id={formName}
        className="w-full md:w-full max-w- xl:max-w-4xl flex flex-col justify-center items-center mx-auto mt-5 mb-20"
      >
        <input type="hidden" name="form-name" value={formName} />
        <div className="flex flex-col lg:flex-row xl:mt-10 lg:gap-12">
          <div className="w-80 xl:w-[25rem] flex flex-col my-5 xl:mt-24">
            <ContactInfo name={name} setName={setName} />
            <HotelSelect hotelList={hotelList} />
            <MoreInfo />
          </div>
          <TourCard tour={tour} />
        </div>
        <div className="w-80 xl:w-[25rem] text-center my-5">
          To confirm your reservation a deposit of ${tour?.depositPrice} per
          person is required
        </div>
        <motion.button
          initial={{
            opacity: 0.2,
            scale: 0.5,
            transition: {
              duration: 3,
              delay: 0.3,
            },
          }}
          whileInView={{
            opacity: 1,
            scale: 0.9,
            transition: {
              duration: 3,
              delay: 0.3,
            },
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.1,
            opacity: 0.7,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.7, transition: { duration: 0.5 } }}
          type="submit"
          className="w-32 lg:w-36 text-sm bg-black text-primary-color py-4 px-3 lg:py-5 lg:px-4 rounded-md uppercase font-bold"
        >
          Submit
        </motion.button>
      </form>
    </>
  );
};

export default ReservationContactForm;
