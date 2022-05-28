import React, {useState, useEffect} from "react";
import CatCard from "../../ui/cat-card/cat-card";
import { StyledUl, StyledSection, StyledLi } from "./styles";
import getCats from "../../../api/catsApi";

function Cats() {
    const [cats, setCats] = useState();
    const [page] = useState(1);

    useEffect(() => {
        getCats(page, 15).then(res => {
            setCats(res);
        })
        }, [page])

    return (
        <StyledSection>
            {cats && cats.length ? (
                <StyledUl>
                    {cats.map( (catData) => (
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