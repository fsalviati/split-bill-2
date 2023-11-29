import React, { useState } from "react";

import BillAmount from "./components/BillAmount";
import ServiceMeFriend from "./components/ServiceMeFriend";
import Reset from "./components/Reset";
import TipTotal from "./components/TipTotal";

const serviceData = [
  {
    index: 1,
    text: "How did you like the service?",
  },
  {
    index: 2,
    text: "How did your friend like the service?",
  },
];

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [serviceAmount1, setServiceAmount1] = useState();
  const [serviceAmount2, setServiceAmount2] = useState();

  return (
    <div className="App">
      <BillAmount billAmount={billAmount} setBillAmount={setBillAmount} />
      {serviceData.map((serviceData, index) => {
        const isService1 = index === 0;
        const serviceAmount = isService1 ? serviceAmount1 : serviceAmount2;
        const setServiceAmount = isService1
          ? setServiceAmount1
          : setServiceAmount2;

        return (
          <ServiceMeFriend
            key={serviceData.index}
            index={serviceData.index}
            text={serviceData.text}
            serviceAmount={serviceAmount}
            setServiceAmount={setServiceAmount}
          />
        );
      })}
      {billAmount > 0 && (
        <div>
          <TipTotal
            billAmount={billAmount}
            serviceAmount1={serviceAmount1}
            serviceAmount2={serviceAmount2}
          />
          <Reset
            setBillAmount={setBillAmount}
            setServiceAmount1={setServiceAmount1}
            setServiceAmount2={setServiceAmount2}
          />
        </div>
      )}
    </div>
  );
}

export default App;
