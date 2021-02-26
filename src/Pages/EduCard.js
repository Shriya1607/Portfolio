import React from "react";
import "./Exp-card.css";

function EduCard({ id, degree, school, date, info }) {
  return (
    <>
      <div className="exp-card">
        <h4>
          {degree} <wbr />
          <span className="text-muted h5">{school}</span>
        </h4>
        <h6 className="date">{date}</h6>
        <p>{info}</p>
      </div>
    </>
  );
}

export default EduCard;
