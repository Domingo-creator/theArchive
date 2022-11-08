import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import ArchiveRecommendation from "./component/archive_recommendation/archive_recommendation";

import Pc9Input from "./pages/pc9Input";
import LeviBackend from "./component/leviBackend";
import WaistLengthInput from "./pages/waistLengthInput";
import ProductIndex from "./component/product_index/product_index";

//create your first component
const Layout = () => {
  const { store, actions } = useContext(Context);
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/browsingPage" />
            <Route element={<ArchiveRecommendation />} path="/archive" />
            <Route element={<ProductIndex />} path="/jeans" />
            <Route
              element={<WaistLengthInput
                actionWaist={actions.addWaist}
                actionLength={actions.addLength}
              />}
              path="/"
            />
            <Route element={<Pc9Input actions={actions.addPc9} />} path="/pc9" />
            <Route element={<LeviBackend />} path="/leviBackend" />

            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
