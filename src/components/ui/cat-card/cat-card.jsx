import React from "react";
import { StyledImg, StyledDiv, StyledLikeWrapper } from "./styles";
import Like from "../like/like";


function CatCard({img, name}) {
    return (
        <StyledDiv>
            <StyledImg src={img} alt={name} />
            <StyledLikeWrapper>
                <Like />
            </StyledLikeWrapper>
        </StyledDiv>
    );
}

export default CatCard;