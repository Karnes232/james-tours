import React from "react";

const ClientInfo = ({ state, handleChange, setState }) => {
  return (
    <>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="name"
          name="name"
          id="name"
          className="contactFormInput peer"
          placeholder=" "
          required
          value={state.name}
          onChange={handleChange}
        />
        <label htmlFor="name" className="contactFormLabel">
          Full Name
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="email"
          name="email"
          id="email"
          className="contactFormInput peer"
          placeholder=" "
          required
          value={state.email}
          onChange={handleChange}
        />
        <label htmlFor="email" className="contactFormLabel">
          Email address
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group flex gap-4 justify-between items-center">
        <div className="text-gray-500">Guest Count</div>
        <div className="flex gap-4 justify-center items-center">
          <button
            className="px-4 py-2 bg-secondary-color text-primary-color text-xs font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
            onClick={(e) => {
              e.preventDefault();
              setState({
                ...state,
                guestCount: state.guestCount + 1,
              });
            }}
          >
            +
          </button>
          <p>{state.guestCount}</p>

          <button
            className="px-4 py-2 bg-secondary-color text-primary-color text-xs font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
            onClick={(e) => {
              e.preventDefault();
              setState({
                ...state,
                guestCount: state.guestCount - 1,
              });
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default ClientInfo;
