import styled from "styled-components";
import Ul from "../../styled/ul/ul";
import Section from "../../styled/section/section";

export const StyledSection = styled(Section)`
    max-width: 1316px;
    margin: 0 auto;
`;

export const StyledUl = styled(Ul)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 33px;
`;

export const StyledLi = styled.li`
    min-height: 256px;
    min-width: 257px;
`;