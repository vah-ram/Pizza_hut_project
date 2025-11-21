import React from "react";

function AboutMenu() {

    return (
        <>
            <footer
                className="w-full h-auto bg-[#3d3d3d]
               mt-[70px] pl-[80px] pt-[40px] pr-[80px] max-lg:pl-[30px]
                max-lg:pr-[35px] max-md:hidden [body.dark_&]:bg-[#2e2e2e]">
                <div className="flex">

                    <div className="flex max-lg:flex-col max-lg:gap-5 max-lg:text-left">
                        <ul className="flex flex-col gap-1 max-lg:gap-2">
                            <li className="flex gap-2">
                                <img
                                    src="./Img/place-icon.svg"
                                    alt=""
                                    className="w-[25px] h-[25px]"/>
                                <p className="text-[16px] text-white">
                                    8 Vahram Papazyan St, Yerevan 0012,
                                    Armenia
                                </p>
                            </li>

                            <li className="flex gap-2">
                                <img
                                    src="./Img/place-icon.svg"
                                    alt=""
                                    className="w-[25px] h-[25px]"/>
                                <p className="text-[16px] text-white">
                                    15 Tigran Mets Ave, Yerevan 0010, Armenia
                                </p>
                            </li>

                            <li className="flex gap-2">
                                <img
                                    src="./Img/place-icon.svg"
                                    alt=""
                                    className="w-[25px] h-[25px]"/>
                                <p className="text-[16px] text-white">
                                    17, 1 Erebuni St, Yerevan, Armenia
                                </p>
                            </li>

                            <li className="flex gap-2">
                                <img
                                    src="./Img/place-icon.svg"
                                    alt=""
                                    className="w-[25px] h-[25px]"/>
                                <p className="text-[16px] text-white">
                                    Yerevan Mall Food court, Arshakunyats Avenue, Yerevan, Armenia
                                </p>
                            </li>

                            <li className="flex gap-2">
                                <img
                                    src="./Img/place-icon.svg"
                                    alt=""
                                    className="w-[25px] h-[25px]"/>
                                <p className="text-[16px] text-white">
                                    MEGA MALL ARMENIA, Gai Avenue, Yerevan, Armenia
                                </p>
                            </li>

                            <li className="flex gap-2">
                                <img
                                    src="./Img/place-icon.svg"
                                    alt=""
                                    className="w-[25px] h-[25px]"/>
                                <p className="text-[16px] text-white">
                                    1 Hyusisayin poghota, Yerevan, Армения
                                </p>
                            </li>

                            <li className="flex gap-2">
                                <img
                                    src="./Img/place-icon.svg"
                                    alt=""
                                    className="w-[25px] h-[25px]"/>
                                <p className="text-[16px] text-white">
                                    5 Mesrop Mashtoc pokhota, Yerevan 0015, Армения
                                </p>
                            </li>

                            <li className="flex gap-2">
                                <img
                                    src="./Img/place-icon.svg"
                                    alt=""
                                    className="w-[25px] h-[25px]"/>
                                <p className="text-[16px] text-white">
                                    5 Komitas Ave, Yerevan, Армения
                                </p>
                            </li>
                        </ul>

                        <div className="flex gap-5 ml-5 w-auto max-lg:ml-0">
                    <span className="flex gap-2 h-[20px] items-center">
                        <img
                            src="/Img/phone.svg"
                            className="w-[21px] h-[21px]"
                            alt=""/>

                        <a  href="tel:060505505"
                            target="_blank"
                            className="text-white">
                            060505505
                        </a>
                    </span>

                            <span className="flex gap-2 h-[20px] items-center">
                        <img
                            src="/Img/mail.svg"
                            className="w-[21px] h-[21px]"
                            alt=""/>

                        <a href="mailto:delivery@derjavas.am" target="_blank" className="text-white">
                            delivery@derjavas.am
                        </a>

                    </span>
                        </div>

                    </div>

                    <div className="flex gap-2 ml-auto">
                        <img
                            src="/Img/idram-bank-icon.svg"
                            className="w-[60px] h-[30px]"
                            alt=""/>

                        <img
                            src="/Img/arca-bank-icon.svg"
                            className="w-[60px] h-[30px]"
                            alt=""/>

                        <img
                            src="/Img/master-bank-icon.svg"
                            className="w-[60px] h-[30px]"
                            alt=""/>

                        <img
                            src="/Img/visa-bank-icon.svg"
                            className="w-[60px] h-[30px]"
                            alt=""/>
                    </div>
                </div>

                <div className="w-full h-[80px] border-t-1 border-gray-500 mt-11 flex items-center justify-between">
                    <ul className="flex items-center gap-10">
                        <li>
                            <a
                                href="/"
                                className="text-white text-[14px]">
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://pizza-hut.am/us/about?sellingType=isActiveDelivery&mode=light"
                                target="blank"
                                className="text-white text-[14px]">
                                About Us
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://bonee.net/privacy-policy-en.html"
                                target="blank"
                                className="text-white text-[14px]">
                                Terms and Conditions
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://bonee.net/privacy-policy-en.html"
                                target="blank"
                                className="text-white text-[14px]">
                                Privacy policy
                            </a>
                        </li>
                    </ul>

                    <p className="text-[#969696] text-[14px]">
                        @ 2024 Copyright: bonee.net
                    </p>

                </div>

            </footer>
        </>
    )
}

export default AboutMenu;