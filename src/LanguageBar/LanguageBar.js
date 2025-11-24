import i18next from "i18next";
import { useState, useEffect } from "react";

function LanguageBar({ setLanguage }) {

    const [ selectedLangugeCode, setSelectedLanguageCode ] = useState('');

    useEffect(() => {
        setSelectedLanguageCode("en");
    }, []);

    const closeLanguageBar = () => {
        const body = document.querySelector('body');
            body.classList.remove('languageActive');
    }

    const languages = [
        { 
            code: "am", 
            name: "Հայերեն - hy", 
            imgUrl: "https://bonee.blob.core.windows.net/languages/icons/arm.png"
        },
        
        { 
            code: "en", 
            name: "English(US) - en", 
            imgUrl: "https://bonee.blob.core.windows.net/languages/icons/us.png"
        },

        { 
            code: "ru", 
            name: "Русский - ru", 
            imgUrl: "https://bonee.blob.core.windows.net/languages/icons/ru.png"
        },
    ];

    return (
        <>
            <div
                className="w-[300px] h-full fixed bg-white flex flex-col
                right-[-300px] z-[200] absolute top-0 shadow-lg
                [body.languageActive_&]:translate-x-[-300px]
                 transition duration-300 ease-in-out max-md:mt-[-60px]" >

                <button className="w-[40px] h-[40px] border-1 border-gray-200
                                    rounded-xl cursor-pointer flex items-center
                                    justify-center cursor-pointer absolute right-[2vmin]
                                    top-[2vmin]"
                        onClick={closeLanguageBar}>
                    <img
                        src="https://pizza-hut.am/assets/images/app_2/close.svg"
                        className="w-[20px] h-[20px]"/>
                </button>
                
                <ul className="flex flex-col gap-3 mt-20 ml-5">

                    {
                        languages.map((language) => (
                            <li className="flex gap-2 cursor-pointer 
                                items-center"
                                onClick={() => {
                                    setSelectedLanguageCode(language.code)
                                    setLanguage(language.code)
                                    i18next.changeLanguage(language.code)
                                    closeLanguageBar();
                                }}>

                                <input 
                                    name="radio"
                                    type="radio"
                                    checked={selectedLangugeCode === language.code}
                                    className="appearance-none w-5 h-5 border border-gray-400 rounded-full
                                            cursor-pointer relative
                                            before:content-[''] before:w-2.5 before:h-2.5 before:bg-gray-400 
                                            before:rounded-full before:absolute before:top-1/2 before:left-1/2 
                                            before:-translate-x-1/2 before:-translate-y-1/2
                                            before:scale-0 checked:before:scale-100
                                            transition" />

                                <img
                                    src={language.imgUrl}
                                    className="w-[30px] h-[20px]"/>

                                <p className="uppercase text-[24px] text-[#9D9D9D]">
                                    {language.name}
                                </p>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </>
    )
};

export default LanguageBar;