import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrencyComponent = () => {
  const [cad, setCad] = useState(null);
  const [usd, setUsd] = useState(null);
  const [euro, setEuro] = useState(null);
  useEffect(() => {
    axios.get(`/api/currencycad`).then((res) => {
      const currencyCad = res.data;
      setCad(currencyCad.rate.conversion_rate);
    });
    axios.get(`/api/currencyusd`).then((res) => {
      const currencyUsd = res.data;
      setUsd(currencyUsd.rate.conversion_rate);
    });
    axios.get(`/api/currencyeuro`).then((res) => {
      const currencyEuro = res.data;
      setEuro(currencyEuro.rate.conversion_rate);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly 2xl:space-x-10 mx-auto lg:mt-10">
        <div className="max-w-sm min-w-[22rem] my-5 mx-2 rounded-lg overflow-hidden shadow-lg flex flex-col bg-zinc-50 bg-opacity-60">
          <div className="flex justify-center font-semibold py-5 px-5 border-b border-gray-300 border-opacity-50 ">
            <div>Current Rate</div>
          </div>
          <div className="py-5 px-5">
            <div className="flex justify-between border-b text">
              <div>USD</div>
              <div>{usd?.toFixed(2)} RD$</div>
            </div>
            <div className="flex justify-between border-b text my-4">
              <div>CDN</div>
              <div>{cad?.toFixed(2)} RD$</div>
            </div>
            <div className="flex justify-between border-b text">
              <div>EURO</div>
              <div>{euro?.toFixed(2)} RD$</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyComponent;
