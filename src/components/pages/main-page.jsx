import React from "react";
import Cats from "../blocks/cats/cats";

function MainPage({catsData}) {
    return (
        <>
            <Cats catsData={catsData}/>
        </>
    );
}

export default MainPage;