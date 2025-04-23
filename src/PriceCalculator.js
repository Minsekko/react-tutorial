import { useState } from "react";

function PriceCalculator({ perPrice }) {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h3>개당가격:{perPrice}</h3>
      <hr />
      주문수량: <input type="number" defaultValue="1" step="1" onInput={evt} />
      <hr />
      결재금액 : {count * perPrice}
    </div>
  );
}

export default PriceCalculator;
