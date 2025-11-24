import React, {useEffect, useState} from "react";

function MyProfile({ currentUser }) {

    const [modeValue, setModeValue] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        const body = document.querySelector("body");

        if (modeValue) {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }

    }, [modeValue]);

    const callDarkAndLightMode = () => {
        setModeValue(prev => {
            localStorage.setItem("darkMode", !prev);
            return !prev;
        });
    };

    return (
        <>
            <div className="w-full px-20 pt-4">

                <div className="w-full flex justify-between">

                    <div className="flex flex-col gap-2">
                        <p className="text-[#9D9D9D] text-[calc(14px+.3vw)]">
                            Welcome
                        </p>

                        <h2 className="text-[#515151] text-[calc(16px+.3vw)] font-[600]">
                            {currentUser.name}   {currentUser.surname}
                        </h2>
                    </div>

                    <div>
                        <p className="text-[calc(12px + .3vw)] text-[#9D9D9D]">
                            { modeValue ? "Light" : "Dark" } Mode
                        </p>

                        <button
                            className="w-[60px] h-[26px] rounded-full bg-transparent
                             border-1 border-[#ebebeb]
                             px-[2px] cursor-pointer"
                            onClick={() => callDarkAndLightMode()}>
                            <span
                                className={`w-[22px] h-[22px] block rounded-full
                                 bg-[#e33b41] ${ modeValue ? "ml-auto" : "" }`}/>
                        </button>
                    </div>

                </div>

                <form>

                </form>
            </div>
        </>
    )
};

export default MyProfile;