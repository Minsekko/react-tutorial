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

  return (
    <div className="receiver-container">
      {address.map((elm, idx) => {
        return (
          <ReceiverItem
            key={idx}
            value={elm}
            address={address}
            setAddress={setAddress}
          />
        );
      })}
      <input className="receiver-input" onKeyDown={keyDownHandle} />
    </div>
  );
}
export default Receiver;
