import styled, { css } from "styled-components";
const columnStyle = css`
    float: left;
    _display: inline;
    width:100%;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;

    @media screen and (min-width: 30em) and (max-width: 60em) {
        width: 50%;
    }

    @media screen and (min-width: 60em) {
        width: 25%;
    }
`;

export const SectionContainer = styled.div`
    *zoom: 1;

    &:before, &:after {
        content: " ";
        display: table;
    }

    &:after {
        clear: both;
    }
`;

export const ColumnOne = styled.div`
    ${columnStyle}
`;

 