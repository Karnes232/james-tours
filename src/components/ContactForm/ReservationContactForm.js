import React, { useState } from "react";
import ContactInfo from "./ContactInfo";

const ReservationContactForm = ({ formName, url }) => {
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
        className="w-64 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5"
      >
        <input type="hidden" name="form-name" value={formName} />
        <ContactInfo name={name} setName={setName} />
      </form>
    </>
  );
};

export default ReservationContactForm;
