import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import AboutMenu from "../AboutMenu/AboutMenu";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../MobileMenuBar.js/MobileMenu";

function AllCatalogs() {
    const navigate = useNavigate();

    return (
        <>
            <HeaderMenu />

            <section className="w-full h-auto mt-[100px] px-20 flex flex-col items-center justify-between
                gap-5 justify-start">

                <span className="w-full flex gap-5 items-center mt-5">
                    <a
                        className="text-[16px] text-[#9D9D9D] cursor-pointer"
                        onClick={() => navigate('/')}>
                        Main page
                    </a>

                    <b className="text-[#9D9D9D]"> > </b>

                    <a className="text-[#e33b41] text-[16px]">
                        Menu
                    </a>
                </span>

                <div className="flex w-full justify-between mt-9">
                    <div className="flex gap-4">
                        <img
                            src="./Img/categories-icon.svg"
                            className="w-[35px] h-[35px]"
                            alt="categories icon"/>
                        <p className="text-[25px] text-[#515151]
                         [body.dark_&]:text-white font-[600]">
                            CATEGORIES
                        </p>
                    </div>

                    <form
                        className="w-[60vw] h-[42px] flex gap-3 items-center max-lg:gap-3"
                        onSubmit={(evt) => {
                            evt.preventDefault()
                        }}>

                        <input
                            type="text"
                            placeholder="Search"
                            className=" w-full h-full border-1 border-[#e7e7e7ff]
                              rounded-[10px] p-3 outline-none text-sm [body.dark_&]:text-white
                              [body.dark_&]:border-[#464646]"
                            maxLength={60}
                            id="search__input"/>

                        <button
                            className="w-[41px] h-full bg-[#e33b41] flex items-center
                            justify-center rounded-[10px] cursor-pointer">
                            <img
                                src="./Img/search-icon.svg"
                                className="w-[15px] h-[15px]"
                                alt=""/>
                        </button>
                    </form>

                </div>

                <div className="w-[95%] flex justify-center gap-[3vh] mt-2">

                    <div className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/f57285e4-5fcc-f853-b25f-1a2e99f65082_1.jpg')]
                    bg-cover cursor-pointer border-3 border-[#e33b41]">
                        <span className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl">
                            <p className="uppercase text-[1.3vh] text-white">
                                Special offers
                            </p>
                        </span>
                    </div>

                    <div className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/e9171210-70dc-6708-a274-d9cd672f7953_3.webp')]
                    bg-cover cursor-pointer">
                        <span className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl">
                            <p className="uppercase text-[1.3vh] text-white">
                                Melts
                            </p>
                        </span>
                    </div>

                    <div className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/c78db5a5-6fd9-b96c-af40-38f96adb0962_3.webp')]
                    bg-cover cursor-pointer">
                        <span className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl">
                            <p className="uppercase text-[1.3vh] text-white">
                                Pizzas
                            </p>
                        </span>
                    </div>

                    <div className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/9dd355b0-9e55-2a66-18ab-8288b16edd6f_3.webp')]
                    bg-cover cursor-pointer">
                        <span className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl">
                            <p className="uppercase text-[1.3vh] text-white">
                                Pizza hot-dog
                            </p>
                        </span>
                    </div>

                    <div className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/d2fb20b5-d183-c850-ceac-cb1e8b1b962d_3.webp')]
                    bg-cover cursor-pointer">
                        <span className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl">
                            <p className="uppercase text-[1.3vh] text-white">
                                Salads
                            </p>
                        </span>
                    </div>

                    <div className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/d51ed5d9-6431-0c2f-4266-fa3a0a85d8d0_3.webp')]
                    bg-cover cursor-pointer">
                        <span className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl">
                            <p className="uppercase text-[1.3vh] text-white text-center">
                                Burgers & Sandwiches
                            </p>
                        </span>
                    </div>

                    <div className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/b7437126-6bca-d2ac-d547-df490de15048_3.webp')]
                    bg-cover cursor-pointer">
                        <span className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl">
                            <p className="uppercase text-[1.3vh] text-white">
                                Snacks
                            </p>
                        </span>
                    </div>

                    <div className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/a1bd7070-a5d8-0c9d-6ccc-fb425384eb4f_3.webp')]
                    bg-cover cursor-pointer">
                        <span className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl">
                            <p className="uppercase text-[1.3vh] text-white">
                                Desserts
                            </p>
                        </span>
                    </div>

                    <div className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/7d5263b7-35c6-fe37-a3f9-6965fccf5597_3.webp')]
                    bg-cover cursor-pointer">
                        <span className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl">
                            <p className="uppercase text-[1.3vh] text-white">
                                Beverages
                            </p>
                        </span>
                    </div>

                    <div className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/d7292f08-27e3-aff4-9dd9-41ad7b20a123_3.webp')]
                    bg-cover cursor-pointer">
                        <span className="w-full h-[40%] absolute bottom-0 flex items-center
                            justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl">
                                <p className="uppercase text-[1.3vh] text-white">
                                    Sauces
                                </p>
                        </span>
                    </div>

                </div>

                <footer className="w-full flex flex-col mt-10">

                    <h2 className="text-[25px] text-[#515151]
                         [body.dark_&]:text-white font-[600] uppercase">
                        Special offers
                    </h2>

                    <div className="w-full mt-3 flex flex-wrap gap-20"
                         alt="filtered products div">
                        {
                            true ?
                                <>
                                    <div
                                        className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start
                            items-center relative rounded-[20px]
                            border-1 border-gray-300 before:content-['-30%'] before:absolute before:z-1 before:left-0 before:top-[25px] before:w-[80px] before:h-[30px] before:bg-[#f33] before:text-white before:flex before:justify-center before:items-center before:rounded-tr-[8px] before:rounded-br-[8px] before:text-[16px]">

                            <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden">
                                <img
                                    src="https://bonee.blob.core.windows.net/images/a0bcdc66-7da3-0c1a-3887-396ce30bd05a_2.webp"
                                    className="hover:scale-110 duration-500"
                                    alt="slider item img"/>
                            </span>

                                        <div className="w-full h-auto flex justify-center items-center mt-2">
                                            <p className="[body.dark_&]:text-white text-[#515151] font-[600]
                                 text-[18px] uppercase">
                                                Combo Pepperoni
                                            </p>
                                        </div>

                                        <div className="w-[90%] h-[44px] absolute bottom-[-22px] rounded-[10px] flex overflow-hidden">

                                            <button className="w-[50%] cursor-pointer bg-[#3d3d3d]">
                                                <p className="text-[#e33b41] text-[17px] font-[800] font-sans leading-[15px]">
                                                    8,800
                                                </p>

                                                <p className="text-[#9d9d9d] text-[12px] line-through">
                                                    11,000
                                                </p>
                                            </button>

                                            <button className="w-[50%] cursor-pointer bg-[#e33b41]
                                            flex justify-center items-center gap-2 hover:opacity-90">
                                                <img
                                                    src="./Img/pizza-store-icon.svg"
                                                    className="w-[22px] h-[30px]"
                                                    alt=""/>

                                                <p className="text-white text-[14px]">
                                                    ADD
                                                </p>
                                            </button>
                                        </div>

                                    </div>


                                </> : ''
                        }
                    </div>
                </footer>

            </section>

            <AboutMenu/>

        </>
    )
};

export default AllCatalogs;