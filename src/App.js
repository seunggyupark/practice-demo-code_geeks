import React from "react";
import "./styles.css";
import MainView from "./pages/MainView";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MainView />
      </div>
    </div>
  );
}
