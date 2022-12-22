import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./infraestructure/pages/Home";
import BatchListContainer from "./infraestructure/components/containers/BatchListContainer";
import BatchDetailContainer from "./infraestructure/components/containers/BatchDetailContainer";
import Footer from "./infraestructure/components/pure/footer/Footer";
import Error404 from "./infraestructure/pages/Error404";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/batchs/:id" element={<BatchListContainer />} />{" "}
          <Route path="/batchs/detail/:id" element={<BatchDetailContainer />} />{" "}
          <Route path="*" element={<Error404 />} />
        </Routes>{" "}
        <Footer />
      </Router>{" "}
    </div>
  );
}

export default App;
