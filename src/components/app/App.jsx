import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "../pages/main-page";
import Favorites from "../pages/favorites";
import { GlobalStyle } from "./styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <PageWrapper>
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
