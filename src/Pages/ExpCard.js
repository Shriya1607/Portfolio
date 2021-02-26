import React from "react";
import "./Exp-card.css";

function ExpCard({ id, role, company, date, info }) {
  return (
    <>
      <div className="exp-card">
        <h4>
          {role} <span className="text-muted h5">{company}</span>
        </h4>
        <h6 className="date">{date}</h6>
        <p>{info}</p>
      </div>
    </>
  );
}

export default ExpCard;
