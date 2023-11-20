import React from "react";
import "./card.css";

import { BiSolidMessageAltError } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";

const Card = ({ heading, para, tag }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2 style={{ color: "gray" }}>{heading}</h2>

          <div className="photo-icon">
            <img
              src="data:image/png;base64,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"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="card-body">
          <p>{para}</p>
        </div>

        <div className="container">
          <div className="icon-border">
            <BiSolidMessageAltError fontSize="small" className="circle-icon" />
          </div>
          <div className="text-border">
            <GoDotFill className="square-icon" />
            <span>{tag[0]}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
