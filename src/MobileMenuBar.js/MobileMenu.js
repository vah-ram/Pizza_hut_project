import { useNavigate } from "react-router-dom";

function MobileMenu() {
    const navigate = useNavigate();

    return (
        <>
            <footer className="bg-white hidden items-center justify-around 
            fixed z-[100] w-full h-auto
             absolute bottom-0 max-md:flex bg-white p-2 
             [body.dark_&]:bg-[#2e2e2e]">
                <button
                        className="flex flex-col gap-1 justify-center 
                        items-center cursor-pointer"
                        onClick={() => navigate("/")}>
                    <img 
                        src="https://www.pizza-hut.am/assets/images/app_2/home.svg" 
                        className="w-[27px] h-[27px]" 
                        alt=""/>
                        <p className="uppercase text-[#515151] text-[3vw] font-[600]
                         [body.dark_&]:text-white">
                            Home
                        </p>
                </button>

                <button
                        className="flex flex-col gap-1 justify-center 
                        items-center cursor-pointer mr-3"
                        onClick={() => navigate("/about")}>
                    <img 
                        src="https://www.pizza-hut.am/assets/images/app_2/aboutUs.svg" 
                        className="w-[27px] h-[27px]" 
                        alt=""/>
                        <p className="uppercase text-[#515151] text-[3vw] font-[600]
                         [body.dark_&]:text-white">
                            About us
                        </p>
                </button>

                <button className="w-[19vw] h-[19vw] flex 
                flex-col gap-1 items-center justify-center 
                absolute bottom-10 bg-blue-500 rounded-full 
                shadow-md cursor-pointer">
                    <img 
                        src="https://www.pizza-hut.am/assets/images/app_2/delivery.svg"
                        className="w-[6vh] h-[6vh] max-sm:w-[4vh]
                         max-sm:h-[4vh]"
                        alt=""/>
                    
                    <p className="text-[2vw] text-white font-[600]">DELIVERY</p>
                </button>

                <button 
                    className="flex flex-col gap-1 justify-center items-center relative
                    after:content-['0'] after:absolute after:w-[17px] after:h-[17px]
                    after:flex after:justify-center after:items-center after:text-[#515151]
                     after:text-[11px] after:top-[-7px] after:right-[3px] cursor-pointer ml-3
                     [body.dark_&]:after:text-white"
                    onClick={() => navigate("/basket")}>

                    <img 
                        src="https://bonee.blob.core.windows.net/company-type/Assets/basket.svg" 
                        className="w-[27px] h-[27px]" 
                        alt=""/>

                        <p className="uppercase text-[#515151] text-[3vw] font-[600]
                        [body.dark_&]:text-white">
                            Basket
                        </p>

                </button>

                <button 
                    className="flex flex-col gap-1 justify-center 
                    items-center cursor-pointer"
                    onClick={() => navigate('/signIn')}>
                    <img 
                        src="https://www.pizza-hut.am/assets/images/app_2/user.svg" 
                        className="w-[27px] h-[27px]" 
                        alt=""/>
                        <p className="uppercase text-[#515151] text-[3vw] font-[600]
                        [body.dark_&]:text-white">
                            Log in
                        </p>
                </button>
            </footer>
        </>
    )
};

export default MobileMenu;