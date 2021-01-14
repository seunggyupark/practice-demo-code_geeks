import React, { useState, useEffect } from "react";
import "./MainView.css";

import { data } from "../data/data";

import Row from "../components/Row";

const MainView = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    setAds(data);
  }, []);

  const changeAdStatus = (id) => {
    //BACKEND CHANGE .then => conditionally change local state
    const targetIndex = ads.findIndex((element) => element.id === id);
    let tempArray = [...ads];
    tempArray[targetIndex].status = "done";
    tempArray = tempArray.filter((element) => element.status !== "done");
    setAds(tempArray);
  };

  return (
    <div className="main-view">
      {ads.map((e) => (
        <Row ad={e} key={e.id} updateStatus={changeAdStatus} />
      ))}
    </div>
  );
};

export default MainView;
