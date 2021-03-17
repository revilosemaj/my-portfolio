import styled from "styled-components";

const columnStyles = `
    
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

 