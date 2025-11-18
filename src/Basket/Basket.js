import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import AboutMenu from "../AboutMenu/AboutMenu";

function Basket({ isMobile }) {
    return (
        <>
            <HeaderMenu
                isMobile={isMobile}/>
            <AboutMenu />
        </>
    )
}

export default Basket;