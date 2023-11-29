import React from "react";

const ServiceFriend = ({ text, serviceAmount, setServiceAmount }) => {
  const handleserviceAmount = (event) => {
    setServiceAmount(event.target.value);
  };

  return (
    <div className="service-me-friend">
      <h1>{text}</h1>
      <select
        className="input"
        value={serviceAmount}
        onChange={handleserviceAmount}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was amazing! (20%)</option>
      </select>
    </div>
  );
};

export default ServiceFriend;
