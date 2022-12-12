import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import { store } from "./services/store";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </Provider>
  );
};

export default App;
