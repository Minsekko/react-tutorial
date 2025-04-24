import { useState } from "react";

function ReceiverItem({ value, address, setAddress }) {
  const clickHandle = function (evt) {
    const newAddress = [];
    for (let i = 0; i < address.length; i++) {
      if (address[i] !== evt.target.value) {
        newAddress.push(address[i]);
      }
    }
    console.log(newAddress);
    setAddress(newAddress);
  };

  return (
    <>
      <div className="receiver-item">
        <span>{value}</span>
        <button onClick={clickHandle} value={value}>
          x
        </button>
      </div>
    </>
  );
}

export default ReceiverItem;
