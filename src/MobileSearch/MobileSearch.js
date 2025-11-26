import React from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function MobileSearch() {
    const navigate = useNavigate();

    const { t } = useTranslation();

    return (
        <>
            <div className="w-full h-[60px] hidden absolute top-0 left-0 shadow-md
             items-center max-md:flex">
                <div className="flex gap-3 items-center ml-2">
                    <button
                        className="w-[40px] h-[40px] flex items-center justify-center
                           border-1 border-gray-200 rounded-xl outline-none
                           cursor-pointer"
                        onClick={() => navigate('/')}>
                        <img
                            src="https://pizza-hut.am/assets/images/app_2/close.svg"
                            className="w-[20px] h-[20px]"
                        />
                    </button>

                    <form className="w-[calc(100%-80px)] flex items-center justify-between h-[40px]
                        bg-[rgb(230,230,230)] pl-3 rounded-l-[25px] rounded-r-xl
                         absolute right-5">

                        <input
                            type="text"
                            placeholder={t("search")}
                            className="outline-none border-none w-[calc(100%-60px)]"/>

                        <button
                            className="w-[40px] h-[40px] flex items-center justify-center
                            cursor-pointer rounded-xl bg-[#e33b41]"
                            onClick={() => navigate('/search')}>
                            <img
                                src="https://pizza-hut.am/assets/images/app_2/searchWhite.svg"
                                className="w-[18px] h-[18px]"/>
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
};

export default MobileSearch;