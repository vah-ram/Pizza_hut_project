import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

function LoadingToggle() {

    setTimeout(() => {
        const load = document.querySelector('.loadDiv');

        load.classList.add('hidden')
    }, 800);

    return (
        <>
            
        </>
    )
}

export default LoadingToggle;
