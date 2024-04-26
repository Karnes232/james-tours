import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import MoreInfo from "./MoreInfo";
import { motion } from "framer-motion";
const ContactForm = ({ formName, url }) => {
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
        <MoreInfo />
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

export default ContactForm;
