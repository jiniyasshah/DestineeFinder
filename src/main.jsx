import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout";
import Checkout from "./components/Checkout";
import Store from "./store/index.js";
import CheckoutLayout from "./components/CheckoutLayout";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/checkout"
            element={
              <CheckoutLayout>
                <Checkout />
              </CheckoutLayout>
            }
          />

          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            {/* Add the route for the CheckoutPage */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
