import React from "react";

const PersonalInformation = ({ name, email }) => {
  return (
    <>
      {name && <p className="text-2xl md:text-4xl font-serif mb-2">{name}</p>}
      {/* {email && <p className="text-2xl md:text-4xl font-serif mb-2">{email}</p>} */}
    </>
  );
};

export default PersonalInformation;
