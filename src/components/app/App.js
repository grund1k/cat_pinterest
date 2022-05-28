import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "../pages/main-page";
import catsList from "../../mock.js";


function App() {
  return (
    <PageWrapper>
      <MainPage catsData={catsList}/>
    </PageWrapper>
  );
}

export default App;
