import React, { useState, useEffect } from "react";
import "./MainView.css";

import { data, getData } from "../data/data";

import Row from "../components/Row";
import Modal from "../components/UI/Modal";

const MainView = () => {
  const [ads, setAds] = useState([]);
  const [modalAds, setModalAds] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const paramQuery = (page - 1) * 20 + "";
    //Attach paramQuery to the API call and it defaults paramQuery to 0;
    getData(3000).then(() => {
      setAds(data);
    });
  }, [page]);

  const changeAdStatus = (id) => {
    //BACKEND CHANGE .then => conditionally change local state
    const targetIndex = ads.findIndex((element) => element.id === id);
    let tempArray = [...ads];
    tempArray[targetIndex].status = "done";
    tempArray = tempArray.filter((element) => element.status !== "done");
    setAds(tempArray);
  };

  const toggleModal = () => {
    getData(1000).then(() => {
      setModalAds(data);
      setShowModal((prevState) => !prevState);
    });
  };

  return (
    <div className={`main-view ${showModal && "main-view__modal"}`}>
      {/* <label htmlFor="pagination-1">
      <input type="button" id="pagination-1" value={1} />
      <label htmlFor="pagination-2">
      <input type="button" id="pagination-2" value={2} />
      <label htmlFor="pagination-3">
      <input type="button" id="pagination-3" value={3} /> */}
      <div className={`main-view__ads ${showModal && "active-modal"}`}>
        {ads.map((e) => (
          <Row
            ad={e}
            key={e.id}
            updateStatus={changeAdStatus}
            toggleModal={toggleModal}
          />
        ))}
      </div>
      <Modal show={showModal} toggleModal={toggleModal} ads={modalAds} />
    </div>
  );
};

export default MainView;
