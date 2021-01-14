import React from "react";
import "./Row.css";

const Row = (props) => {
  const truncate = (string, length) => string.substring(0, length);

  return (
    <div className="row">
      <div className="title">
        <div className="title__id">{truncate(props.ad.id, 12)}</div>
        <div className="title__name">{truncate(props.ad.name, 20)}</div>
        <div className="title__duplicated">
          ({props.ad.dups ? props.ad.dups.length : 0})
        </div>
        <div>{props.ad.status}</div>
      </div>
      <button onClick={() => props.updateStatus(props.ad.id)}>X</button>
    </div>
  );
};

export default Row;
