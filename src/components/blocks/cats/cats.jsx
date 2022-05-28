import React from "react";
import CatCard from "../../ui/cat-card/cat-card";
import { StyledUl, StyledSection, StyledLi } from "./styles";

function Cats({catsData}) {
    return (
        <StyledSection>
            {catsData && catsData.length ? (
                <StyledUl>
                    {catsData.map( (catData) => (
                        <StyledLi key={catData.id}>
                            <CatCard {...catData} />
                        </StyledLi>
                    ))}
                </StyledUl>
            ) : null }
        </StyledSection>
    );
}

export default Cats;