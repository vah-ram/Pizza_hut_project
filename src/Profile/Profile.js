import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import AboutMenu from "../AboutMenu/AboutMenu";
import { useNavigate, useParams } from "react-router-dom";
import MyProfile from "./MyProfile";
import ProfileHistoryOrders from "./ProfileHistoryOrders";
import ProfileReviews from "./ProfileReviews";
import MyAddress from "./MyAddress";
import ProfileSupport from "./ProfileSupport";
import ProfilePayment from "./ProfilePayment";

function Profile({ isMobile, currentUser }) {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        navigate('/');
    };

    const { page } = useParams();

    return (
        <>
            <HeaderMenu isMobile={isMobile} currentUser={currentUser}/>

            <section 
                className="w-full h-auto flex 
                mt-[60px] px-20">
                
                <div 
                    className="w-[30%] flex flex-col border-r-1
                    border-[#ebebeb]">

                    <span className="w-full flex gap-5 items-center
                     mt-10">
                        <a
                            className="text-[16px] text-[#9D9D9D] cursor-pointer
                            [body.dark_&]:text-white"
                            onClick={() => navigate('/')}>
                            Main page
                        </a>

                        <b className="text-[#9D9D9D]"> {'>'} </b>

                        <a className="text-[#e33b41] text-[16px]">
                            { page.substring(0,1).toUpperCase() }
                            { page.substring(1) }
                        </a>
                    </span>

                    <h2 className="uppercase text-[#9D9D9D]
                    text-[calc(12px+.3vw)] mt-10">
                        Account
                    </h2>

                    <ul className="mt-2">
                        <li
                            className="flex justify-between items-center py-[12px] pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]"
                            onClick={() => navigate("/profile/orders")}>
                            <span className="flex gap-3">
                                <img 
                                    src="https://www.pizza-hut.am/assets/images/app_2/ordersHistory.svg"
                                    className="w-[20px] h-[20px]"
                                    alt=""/>
                                
                                <p className="uppercase text-[calc(12px+.3vw)] text-[#515151]">
                                    Orders history
                                </p>
                            </span>

                            <img 
                                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                                className="w-[10px] rotate-[180deg]"
                                alt=""/>
                        </li>

                        <li
                            className="flex justify-between items-center py-[12px] pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]"
                            onClick={() => navigate("/profile/reviews")}>
                            <span className="flex gap-3">
                                <img 
                                    src="https://www.pizza-hut.am/assets/images/app_2/reviews.svg"
                                    className="w-[20px] h-[20px]"
                                    alt=""/>

                                <p className="uppercase text-[calc(12px+.3vw)] text-[#515151]">
                                    Reviews
                                </p>
                            </span>

                            <img 
                                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                                className="w-[10px] rotate-[180deg]"
                                alt=""/>
                            
                        </li>
                    </ul>

                    <h2 className="uppercase text-[#9D9D9D]
                    text-[calc(12px+.3vw)] mt-4">
                        Personal Information
                    </h2>

                    <ul className="flex flex-col mt-2">

                        <li
                            className="flex justify-between items-center py-[12px] pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]"
                            onClick={() => navigate("/profile/profile")}>
                            <span className="flex gap-3">
                                <img 
                                    src="https://www.pizza-hut.am/assets/images/app_2/myProfile.svg"
                                    className="w-[20px] h-[20px]"
                                    alt=""/>

                                <p className="uppercase text-[calc(12px+.3vw)] text-[#515151]">
                                    My Profile
                                </p>
                            </span>

                            <img 
                                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                                className="w-[10px] rotate-[180deg]"
                                alt=""/>
                            
                        </li>

                        <li
                            className="flex justify-between items-center py-[12px] pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]"
                            onClick={() => navigate("/profile/address")}>
                            <span className="flex gap-3">
                                <img 
                                    src="https://www.pizza-hut.am/assets/images/app_2/location.svg"
                                    className="w-[20px] h-[20px]"
                                    alt=""/>

                                <p className="uppercase text-[calc(12px+.3vw)] text-[#515151]">
                                    My Address
                                </p>
                            </span>

                            <img 
                                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                                className="w-[10px] rotate-[180deg]"
                                alt=""/>

                        </li>

                        <li
                            className="flex justify-between items-center py-[12px]  pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]"
                            onClick={() => navigate("/profile/paymentMethod")}>
                            <span className="flex gap-3">
                                <img 
                                    src="https://www.pizza-hut.am/assets/images/app_2/card.svg"
                                    className="w-[20px] h-[20px]"
                                    alt=""/>

                                <p className="uppercase text-[calc(12px+.3vw)] text-[#515151]">
                                    Payment Method
                                </p>
                            </span>
                            
                            <img 
                                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                                className="w-[10px] rotate-[180deg]"
                                alt=""/>
                            
                        </li>
                    </ul>

                    <h2 className="uppercase text-[#9D9D9D]
                    text-[calc(12px+.3vw)] mt-10">
                        Other
                    </h2>

                    <ul className="flex flex-col mt-2">
                        <li
                            className="flex justify-between items-center py-[12px]  pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]"
                            onClick={() => navigate("/terms-and-conditions")}>
                            <span className="flex gap-3">
                                <img 
                                    src="https://www.pizza-hut.am/assets/images/app_2/terms-conditions.svg"
                                    className="w-[20px] h-[20px]"
                                    alt=""/>

                                <p className="uppercase text-[calc(12px+.3vw)] text-[#515151]">
                                    Terms and Conditions
                                </p>
                            </span>

                            <img 
                                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                                className="w-[10px] rotate-[180deg]"
                                alt=""/>

                        </li>

                        <li
                            className="flex justify-between items-center py-[12px]  pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]"
                            onClick={() => navigate("/privacy-policy")}>
                            <span className="flex gap-3">
                                <img 
                                    src="https://www.pizza-hut.am/assets/images/app_2/privacyPolicy.svg"
                                    className="w-[20px] h-[20px]"
                                    alt=""/>

                                <p className="uppercase text-[calc(12px+.3vw)] text-[#515151]">
                                    Privacy policy
                                </p>
                            </span>

                            <img 
                                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                                className="w-[10px] rotate-[180deg]"
                                alt=""/>
                            
                        </li>

                        <li
                            className="flex justify-between items-center py-[12px] pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]"
                            onClick={() => navigate("/profile/support")}>
                            <span className="flex gap-3">
                                <img 
                                    src="https://www.pizza-hut.am/assets/images/app_2/support.svg"
                                    className="w-[20px] h-[20px]"
                                    alt=""/>

                                <p className="uppercase text-[calc(12px+.3vw)] text-[#515151]">
                                    Support
                                </p>
                            </span>

                            <img 
                                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                                className="w-[10px] rotate-[180deg]"
                                alt=""/>
                            
                        </li>

                         <li
                             className="flex justify-between items-center py-[12px] pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]"
                             onClick={() => logOut()}>
                            <span className="flex gap-3">
                                <img
                                    src="https://www.pizza-hut.am/assets/images/app_2/logOut.svg"
                                    className="w-[20px] h-[20px]"
                                    alt=""/>

                                <p className="uppercase text-[calc(12px+.3vw)] text-[#515151]">
                                    Log out
                                </p>
                            </span>

                            <img 
                                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                                className="w-[10px] rotate-[180deg]"
                                alt=""/>
                            
                        </li>
                    </ul>
                </div>

                <div className="w-[70%] flex mt-5">
                    {
                        {
                            profile: <MyProfile currentUser={currentUser} />,
                            orders: <ProfileHistoryOrders />,
                            reviews: <ProfileReviews />,
                            address: <MyAddress />,
                            paymentMethod: <ProfilePayment />,
                            support: <ProfileSupport />,
                        }[page] || ""
                    }
                </div>

            </section>

            <AboutMenu />
        </>
    )
};

export default Profile;