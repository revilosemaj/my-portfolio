import styled from "styled-components";

export const IphoneContainer = styled.div`
    width:100%;
    height: 100vh;
    align-items: center;

    @media screen and (min-width: 30em) {
        display: flex;
    }
`;

export const ImageContainer = styled.div`
    max-width: 32rem;
    padding-left: 4rem;
    padding-right: 4rem;

    img {
        height:600px;
    }
`;

export const AsideText = styled.div`
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;

    @media screen and (min-width: 30em) {
            text-align: left;
    }
`;

export const TextHeaderOne = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 2rem;

    @media screen and (min-width: 60em) {
            font-size: 3rem;
    }

    @media screen and (min-width: 30em) {
            margin-top: 0;
    }
`;

export const TextHeaderTwo = styled.h2`
    font-size: 1rem;
    font-weight: 100;
    margin-bottom: 2rem;
    line-height: 1.25;

    @media screen and (min-width: 60em) {
            font-size: 1.5rem;
            margin-bottom: 4rem;
    }

`;

export const DownloadAppButton = styled.a`
    display: inline-block;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform .25s ease-out;

    &:hover, &:focus {
        transform: scale(1.05);
    }

    &:active {
        transform:scale(.9);
    }
`;