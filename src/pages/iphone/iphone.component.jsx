import React from "react";
import { ReactComponent as PhoneImage } from "../../assets/iphone.svg";
import {
    IphoneContainer,
    ImageContainer,
    AsideText,
    TextHeaderOne,
    TextHeaderTwo,
    DownloadAppButton

} from "./iphone.styles";

export const Iphone = () => (
    <IphoneContainer>
        <ImageContainer>
            <img src="http://tachyons.io/img/iPhone7Vertical.jpg" alt="iphone"/> 
        </ImageContainer>
        <AsideText>
            <TextHeaderOne>Connect in a whole new way.</TextHeaderOne>
            <TextHeaderTwo>Rated the #1 app for communicating with customers.</TextHeaderTwo>
            <DownloadAppButton 
                href="https://www.amazon.com/Apple-iPhone-Warranty-Unlocked-Cellphone/dp/B015E8UTIU/ref=sr_1_2?ie=UTF8&qid=1481330742&sr=8-2&keywords=iphone+6s">
                <PhoneImage />
            </DownloadAppButton>
        </AsideText>
    </IphoneContainer>
);