import React from "react";
import { StyledImg, StyledDiv, StyledLikeWrapper } from "./styles";
import Like from "../like/like";


function CatCard({url}) {
    return (
        <StyledDiv>
            <StyledImg src={url}/>
            <StyledLikeWrapper>
                <Like />
            </StyledLikeWrapper>
        </StyledDiv>
    );
}

export default CatCard;