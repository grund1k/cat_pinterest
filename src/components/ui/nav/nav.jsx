import React from "react";
import { StyledNav, StyledNavWrapper, StyledNavLink } from "./styles";

function Nav({onTransfer}) {
    return(
        <StyledNav>
            <StyledNavWrapper>
                <StyledNavLink to="/cat_pinterest">Все котики</StyledNavLink>
                <StyledNavLink to="/favorites">Любимые котики</StyledNavLink>
            </StyledNavWrapper>
        </StyledNav>
    )
}

export default Nav;