import React from "react";

function VitalsCard({ label, value, unit, alert }) {
  const cardClass = alert ? "vitals-card alert-card" : "vitals-card";
  return (
    <div className={cardClass}>
      <h3>{label}</h3>
      <p>
        {value}
        {unit}
      </p>
      {alert && <p className="alert">{alert}</p>}
    </div>
  );
}

export default VitalsCard;
