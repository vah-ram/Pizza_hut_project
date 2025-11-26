import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function MobilePizzaMenu() {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const [ modeValue, setModeValue ] = useState('');

    const callDarkAndLightMode = () => {
        const body = document.querySelector('body');

        if (!body.classList.contains('dark')) {
            body.classList.add('dark');
            setModeValue(true);
        } else {
            body.classList.remove('dark');
            setModeValue(false)
        }
    }

    return (
        <>
            <section className='w-full h-full flex-col mt-[60px] p-5 pb-[14rem] 
            hidden max-md:flex max-sm:p-2 max-sm:mt-[70px] max-sm:pb-[13rem]'>
                <div className="w-full h-full grid grid-cols-2 gap-[5px]">

                    <div className="w-full h-full max-h-[300px] shrink-[0]
                        relative rounded-[50px]
                        overflow-hidden max-sm:max-h-[250px] max-sm:rounded-[30px]
                        cursor-pointer"
                         onClick={() => navigate('/catalogs/special-offers')}>
                            <img
                                src="https://bonee.blob.core.windows.net/images/f57285e4-5fcc-f853-b25f-1a2e99f65082_1.jpg"
                                className="hover:scale-110 duration-500 w-full h-full"
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex 
                                justify-center items-center bg-[#0018]">

                                <p className="text-white font-[500] text-[18px] 
                                max-sm:text-[14px] uppercase">
                                    {t("categorie_special_offer")}
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-full max-h-[300px] shrink-[0]
                            relative rounded-[50px] overflow-hidden max-sm:max-h-[250px]
                            max-sm:rounded-[30px] cursor-pointer"
                             onClick={() => navigate('/catalogs/melts')}>

                            <img
                                src="https://bonee.blob.core.windows.net/images/e9171210-70dc-6708-a274-d9cd672f7953_3.webp"
                                className="hover:scale-110 duration-500 w-full h-full"
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex 
                            justify-center items-center bg-[#0018]">
                                <p className="text-white font-[500] text-[18px] 
                                max-sm:text-[14px] uppercase">
                                    {t("categorie_melt")}
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-full max-h-[300px] shrink-[0]
                            relative rounded-[50px] overflow-hidden max-sm:max-h-[250px]
                            max-sm:rounded-[30px] cursor-pointer"
                             onClick={() => navigate('/catalogs/pizzas')}>

                            <img
                                src="https://bonee.blob.core.windows.net/images/c78db5a5-6fd9-b96c-af40-38f96adb0962_3.webp"
                                className="hover:scale-110 duration-500 w-full h-full"
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex 
                            justify-center items-center bg-[#0018]">
                                <p className="text-white font-[500] text-[18px] 
                                max-sm:text-[14px] uppercase">
                                    {t("categorie_pizzas")}
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-full max-h-[300px] shrink-[0] relative
                                rounded-[50px] overflow-hidden max-sm:max-h-[250px]
                                max-sm:rounded-[30px] cursor-pointer"
                             onClick={() => navigate('/catalogs/pizza-hot-dog')}>

                            <img
                                src="https://bonee.blob.core.windows.net/images/9dd355b0-9e55-2a66-18ab-8288b16edd6f_3.webp"
                                className="hover:scale-110 duration-500 w-full h-full"
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex 
                            justify-center items-center bg-[#0018]">
                                <p className="text-white font-[500] text-[18px]
                                 max-sm:text-[14px] uppercase">
                                    {t("categorie_pizza_hot_dog")}
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-full max-h-[300px] shrink-[0]
                                relative rounded-[50px] overflow-hidden max-sm:max-h-[250px]
                                max-sm:rounded-[30px] cursor-pointer"
                             onClick={() => navigate('/catalogs/salads')}>

                            <img
                                src="https://bonee.blob.core.windows.net/images/d2fb20b5-d183-c850-ceac-cb1e8b1b962d_3.webp"
                                className="hover:scale-110 duration-500 w-full h-full"
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex
                             justify-center items-center bg-[#0018]">
                                <p className="text-white font-[500] text-[18px]
                                max-sm:text-[14px] uppercase">
                                    {t("categorie_salads")}
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-full max-h-[300px] shrink-[0]
                            relative rounded-[50px] overflow-hidden max-sm:max-h-[250px]
                             max-sm:rounded-[30px] cursor-pointer"
                             onClick={() => navigate('/catalogs/burgers-sandwiches')}>

                            <img
                                src="https://bonee.blob.core.windows.net/images/d51ed5d9-6431-0c2f-4266-fa3a0a85d8d0_3.webp"
                                className="hover:scale-110 duration-500 w-full h-full"
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex
                             justify-center items-center bg-[#0018]">
                                <p className="text-white font-[500] text-[18px]
                                max-sm:text-[14px] uppercase">
                                    {t("categorie_burgers_sandwiches")}
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-full max-h-[300px] shrink-[0]
                             relative rounded-[50px] overflow-hidden max-sm:max-h-[250px]
                             max-sm:rounded-[30px] cursor-pointer"
                             onClick={() => navigate('/catalogs/snacks')}>

                            <img
                                src="https://bonee.blob.core.windows.net/images/b7437126-6bca-d2ac-d547-df490de15048_3.webp"
                                className="hover:scale-110 duration-500 w-full h-full"
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex
                             justify-center items-center bg-[#0018]">
                                <p className="text-white font-[500] text-[18px] 
                                max-sm:text-[14px] uppercase">
                                    {t("categorie_snacks")}
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-full max-h-[300px] shrink-[0]
                                 relative rounded-[50px] overflow-hidden max-sm:max-h-[250px]
                                 max-sm:rounded-[30px] cursor-pointer"
                             onClick={() => navigate('/catalogs/desserts')}>

                            <img
                                src="https://bonee.blob.core.windows.net/images/a1bd7070-a5d8-0c9d-6ccc-fb425384eb4f_3.webp"
                                className="hover:scale-110 duration-500 w-full h-full"
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex
                                 justify-center items-center bg-[#0018]">
                                <p className="text-white font-[500] text-[18px]
                                    max-sm:text-[14px] uppercase">
                                    {t("categorie_desserts")}
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-full max-h-[300px] shrink-[0]
                                 relative rounded-[50px] overflow-hidden max-sm:max-h-[250px]
                                 max-sm:rounded-[30px] cursor-pointer"
                             onClick={() => navigate('/catalogs/beverages')}>

                            <img
                                src="https://bonee.blob.core.windows.net/images/7d5263b7-35c6-fe37-a3f9-6965fccf5597_3.webp"
                                className="hover:scale-110 duration-500 w-full h-full"
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex
                                 justify-center items-center bg-[#0018]">
                                <p className="text-white font-[500] text-[18px]
                                    max-sm:text-[14px] uppercase">
                                    {t("categorie_beverages")}
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-full max-h-[300px] shrink-[0]
                                relative rounded-[50px] overflow-hidden max-sm:max-h-[250px]
                                max-sm:rounded-[30px] cursor-pointer"
                             onClick={() => navigate('/catalogs/sauces')}>

                            <img
                                src="https://bonee.blob.core.windows.net/images/d7292f08-27e3-aff4-9dd9-41ad7b20a123_3.webp"
                                className="hover:scale-110 duration-500 w-full h-full"
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 
                            flex justify-center items-center bg-[#0018]">
                                <p className="text-white font-[500] text-[18px] 
                                max-sm:text-[14px] uppercase">
                                    {t("categorie_sauces")}
                                </p>
                            </div>
                        </div>
                </div>

                <div
                    className="w-full h-[40px] rounded-full flex items-center
                         border border-1 border-gray-200 mt-5 overflow-hidden
                         cursor-pointer [body.dark_&]:border-[#d8d8d871]"
                        onClick={callDarkAndLightMode}>

                    <button className="w-[50%] h-full rounded-full flex 
                        items-center justify-center
                        font-sans uppercase bg-[#E33B41] text-[13px] text-white
                         cursor-pointer
                        [body.dark_&]:bg-transparent">
                            Light mode
                    </button>

                    <button className="w-[50%] h-full rounded-full flex 
                        items-center justify-center
                        font-sans uppercase bg-transparent text-[13px]
                        text-gray-600 cursor-pointer [body.dark_&]:text-white
                        [body.dark_&]:bg-[#E33B41]">
                            Dark mode
                    </button>
                </div>

                <div className="w-full flex justify-center mt-18">
                    <p className="text-[#969696] text-[14px]">
                        @ 2024 Copyright: bonee.net
                    </p>
                </div>

            </section>
        </>
    )
};

export default MobilePizzaMenu;