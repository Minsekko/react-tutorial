import { useState } from "react";
import "./Receiver.css";
import ReceiverItem from "./ReceiverItem";

function Receiver() {
  const [address, setAddress] = useState([]);

  function keyDownHandle(evt) {
    if (evt.key === "Enter" || evt.key === "" || evt.key === "Tab") {
      address.push(evt.target.value);
      evt.target.value = "";
      setAddress([...address]);
      evt.preventDefault();
    }
  }

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
    <div className="receiver-container">
      {address.map((elm, idx) => {
        return <ReceiverItem />;
      })}
      <input className="receiver-input" onKeyDown={keyDownHandle} />
    </div>
  );
}
export default Receiver;
