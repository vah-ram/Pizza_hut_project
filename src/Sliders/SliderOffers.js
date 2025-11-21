import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { useNavigate } from "react-router-dom"

function SliderOffers({ isMobile }) {
    const navigate = useNavigate();

    return (
        <>
            <section className="w-full px-17 mt-[100px] flex flex-col max-lg:px-4 max-md:hidden">
                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <img 
                            src="https://bonee.blob.core.windows.net/images/f57285e4-5fcc-f853-b25f-1a2e99f65082_1.jpg" 
                            className="w-[35px] h-[35px]" 
                            alt="categories icon"/>
                        <p className="text-[25px] text-[#515151] 
                        font-[600] [body.dark_&]:text-white">
                            SPECIAL OFFERS
                        </p>
                    </div>

                        <div className="flex gap-3 h-full items-center">

                        <div className="flex">
                            <button 
                                className="pizza-prev-btn w-[40px] h-[40px] flex items-center justify-center border-1
                                border-gray-300 rounded-tl-[10px] rounded-bl-[10px] cursor-pointer [main.dark_&]:border-gray-500">
                                <img 
                                    src="https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-05-512.png" 
                                    className="w-[33px] h-[33px]"  
                                    alt=""/>
                            </button>

                            <button 
                                className="pizza-next-btn w-[40px] h-[40px] flex items-center justify-center
                                 border-1 border-gray-300 rounded-tr-[10px] rounded-br-[10px] cursor-pointer [main.dark_&]:border-gray-500">
                                <img 
                                    src="https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-06-512.png" 
                                    className="w-[33px] h-[33px]" 
                                    alt=""/>
                            </button>
                        </div>

                    </div>
                </div>

                <div 
                    className="w-full h-[500px] flex shrink-0 gap-[30px] 
                    mt-[35px] overflow-hidden cursor-grab">

                    <Swiper
                            spaceBetween={20}
                            slidesPerView={6}
                            modules={[ Navigation ]}
                            navigation={{
                                prevEl: ".pizza-prev-btn",
                                nextEl: ".pizza-next-btn"
                            }}>

                        <SwiperSlide className="!w-[307px] shrink-0">

                        <div 
                            className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start 
                            items-center relative rounded-[20px] cursor-pointer
                            border-1 border-gray-300 before:content-['-20%'] before:absolute before:z-1
                            before:left-0 before:top-[25px] before:w-[80px] before:h-[30px] before:bg-[#f33]
                            before:text-white before:flex before:justify-center before:items-center before:rounded-tr-[8px]
                             before:rounded-br-[8px] before:text-[16px]"
                        onClick={() => navigate(`/product/jkabsfi4r34123`)}>

                            <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden">
                                <img 
                                    src="https://bonee.blob.core.windows.net/images/3cb64dce-f9bc-6b0a-dd0f-dc785729de67_2.webp" 
                                    className="hover:scale-110 duration-500"
                                    alt="slider item img"/>
                            </span>

                            <div className="w-full h-auto flex justify-center items-center mt-2">
                                <p className="[body.dark_&]:text-white text-[#515151] font-[600]
                                 text-[18px] uppercase">
                                    Combo for Meat Lovers
                                </p>
                            </div>

                            <div class="w-[90%] h-[44px] absolute bottom-[-22px] rounded-[10px] flex overflow-hidden">

                                <button className="w-[50%] cursor-pointer bg-[#3d3d3d]">
                                    <p className="text-[#e33b41] text-[17px] font-[800] font-sans leading-[15px]">
                                        8,800
                                    </p>

                                    <p className="text-[#9d9d9d] text-[12px] line-through">
                                        11,000
                                    </p>
                                </button>

                                <button className="w-[50%] cursor-pointer
                                 bg-[#e33b41] flex justify-center items-center
                                  gap-2 hover:opacity-90">
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

                        </SwiperSlide>

                        <SwiperSlide className="!w-[307px] shrink-0">

                            <div
                            className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start 
                            items-center relative rounded-[20px] 
                            border-1 border-gray-300 before:content-['-20%'] before:absolute before:z-1  before:left-0 before:top-[25px] before:w-[80px] before:h-[30px] before:bg-[#f33] before:text-white before:flex before:justify-center before:items-center before:rounded-tr-[8px] before:rounded-br-[8px] before:text-[16px]">

                            <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden">
                                <img 
                                    src="https://bonee.blob.core.windows.net/images/9fee2d36-e47d-ad17-a565-6416e6a07967_2.webp" 
                                    className="hover:scale-110 duration-500"
                                    alt="slider item img"/>
                            </span>

                            <div className="w-full h-auto flex justify-center items-center mt-2">
                                <p className="[body.dark_&]:text-white text-[#515151] font-[600]
                                 text-[18px] uppercase">
                                    Combo with 3 27 cm pizzas 
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

                                <button className="w-[50%] cursor-pointer bg-[#e33b41] flex justify-center
                                items-center gap-2 hover:opacity-90">
                                    <img 
                                        src="./Img/pizza-store-icon.svg" 
                                        className="w-[22px] h-[30px]"
                                        alt=""/>

                                    <p class="text-white text-[14px]">
                                        ADD
                                    </p>
                                </button>
                            </div>

                        </div>

                        </SwiperSlide>

                        <SwiperSlide className="!w-[307px] shrink-0">

                        <div 
                            className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start 
                            items-center relative rounded-[20px] 
                            border-1 border-gray-300 before:content-['-20%'] before:absolute before:z-1  before:left-0 before:top-[25px] before:w-[80px] before:h-[30px] before:bg-[#f33] before:text-white before:flex before:justify-center before:items-center before:rounded-tr-[8px] before:rounded-br-[8px] before:text-[16px]">

                            <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden">
                                <img 
                                    src="https://bonee.blob.core.windows.net/images/4f0eb176-764e-f85d-3ca1-187d69950caf_2.webp" 
                                    className="w-full h-full hover:scale-110 duration-500"
                                    alt="slider item img"/>
                            </span>
                            
                            <div className="w-full h-auto flex justify-center items-center mt-2">
                                <p className="[body.dark_&]:text-white text-[#515151] font-[600]
                                 text-[18px] uppercase">
                                    Combo with 3 27 cm pizzas
                                </p>
                            </div>

                            <div className="w-[90%] h-[44px] absolute bottom-[-22px] rounded-[10px] flex overflow-hidden">

                                <button className="w-[50%] cursor-pointer bg-[#3d3d3d]">
                                    <p className="text-[#e33b41] text-[17px] font-[800] font-sans leading-[15px]">
                                        8,800
                                    </p>

                                    <p class="text-[#9d9d9d] text-[12px] line-through">
                                        11,000
                                    </p>
                                </button>

                                <button className="w-[50%] cursor-pointer
                                bg-[#e33b41] flex justify-center items-center
                                 gap-2 hover:opacity-90">
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

                        </SwiperSlide>
                    
                        <SwiperSlide className="!w-[307px] shrink-0">

                        <div 
                            className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start 
                            items-center relative rounded-[20px] 
                            border-1 border-gray-300 before:content-['-20%'] before:absolute before:z-1 before:left-0 before:top-[25px] before:w-[80px] before:h-[30px] before:bg-[#f33] before:text-white before:flex before:justify-center before:items-center before:rounded-tr-[8px] before:rounded-br-[8px] before:text-[16px]">

                            <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden">
                                <img 
                                    src="https://bonee.blob.core.windows.net/images/5099df6d-c31b-e13a-8be7-4255899eadb0_2.webp" 
                                    className="hover:scale-110 duration-500"
                                    alt="slider item img"/>
                            </span>
                            

                            <div className="w-full h-auto flex justify-center items-center mt-2">
                                <p className="[body.dark_&]:text-white text-[#515151] font-[600]
                                 text-[18px] uppercase">
                                    Combo Pizza x Nuggets Box
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

                                <button className="w-[50%] cursor-pointer
                                bg-[#e33b41] flex justify-center items-center
                                 gap-2 hover:opacity-90">
                                    <img 
                                        src="./Img/pizza-store-icon.svg" 
                                        className="w-[22px] h-[30px]"
                                        alt=""/>

                                    <p class="text-white text-[14px]">
                                        ADD
                                    </p>
                                </button>
                            </div>

                        </div>

                        </SwiperSlide>

                        <SwiperSlide className="!w-[307px] shrink-0">

                        <div 
                            className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start 
                            items-center relative rounded-[20px] 
                            border-1 border-gray-300 before:content-['-20%'] before:absolute before:z-1 before:left-0 before:top-[25px] before:w-[80px] before:h-[30px] before:bg-[#f33] before:text-white before:flex before:justify-center before:items-center before:rounded-tr-[8px] before:rounded-br-[8px] before:text-[16px]">

                            <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden">
                                <img 
                                    src="https://bonee.blob.core.windows.net/images/b18f7687-3969-d5a2-2f1f-a3324071d48a_2.webp" 
                                    className="hover:scale-110 duration-500"
                                    alt="slider item img"/>
                            </span>

                            <div className="w-full h-auto flex justify-center items-center mt-2">
                                <p className="[body.dark_&]:text-white text-[#515151] font-[600]
                                text-[18px] uppercase">
                                    Cheese bites combo
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

                        </SwiperSlide>

                        <SwiperSlide className="!w-[307px] shrink-0">

                        <div 
                            className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start 
                            items-center relative rounded-[20px] 
                            border-1 border-gray-300 before:content-['-20%'] before:absolute before:z-1 before:left-0 before:top-[25px] before:w-[80px] before:h-[30px] before:bg-[#f33] before:text-white before:flex before:justify-center before:items-center before:rounded-tr-[8px] before:rounded-br-[8px] before:text-[16px]">
                            
                            <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden">
                                <img 
                                    src="https://bonee.blob.core.windows.net/images/8fb639c4-4a17-2cbf-962f-5d885f9a69db_2.webp" 
                                    class="hover:scale-110 duration-500"
                                    alt="slider item img"/>
                            </span>

                            <div className="w-full h-auto flex justify-center items-center mt-2">
                                <p className="[body.dark_&]:text-white text-[#515151] font-[600]
                                 text-[18px] uppercase">
                                    My Box Veggie
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

                        </SwiperSlide>

                        <SwiperSlide className="!w-[307px] shrink-0">

                        <div 
                            className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start 
                            items-center relative rounded-[20px] 
                            border-1 border-gray-300 before:content-['-20%'] before:absolute before:z-1 before:left-0 before:top-[25px] before:w-[80px] before:h-[30px] before:bg-[#f33] before:text-white before:flex before:justify-center before:items-center before:rounded-tr-[8px] before:rounded-br-[8px] before:text-[16px]">

                            <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden">
                                <img 
                                    src="https://bonee.blob.core.windows.net/images/38e8d04f-8759-c627-a751-ff787ce16598_2.webp" 
                                    className="hover:scale-110 duration-500"
                                    alt="slider item img"/>
                            </span>

                            <div className="w-full h-auto flex justify-center items-center mt-2">
                                <p className="[body.dark_&]:text-white text-[#515151] font-[600]
                                 text-[18px] uppercase">
                                    My Box Pepperoni
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

                        </SwiperSlide>

                        <SwiperSlide className="!w-[307px] shrink-0">
                            
                        <div 
                            className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start 
                            items-center relative rounded-[20px] 
                            border-1 border-gray-300 before:content-['-20%'] before:absolute before:z-1 before:left-0 before:top-[25px] before:w-[80px] before:h-[30px] before:bg-[#f33] before:text-white before:flex before:justify-center before:items-center before:rounded-tr-[8px] before:rounded-br-[8px] before:text-[16px]">

                            <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden">
                                <img 
                                    src="https://bonee.blob.core.windows.net/images/2d3522c7-dd5e-d8e3-cf19-1d1831c8e48b_2.webp" 
                                    className="hover:scale-110 duration-500"
                                    alt="slider item img"/>
                            </span>

                            <div className="w-full h-auto flex justify-center items-center mt-2">
                                <p className="[body.dark_&]:text-white text-[#515151] font-[600]
                                 text-[18px] uppercase">
                                    My Box Chicken BBQ
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

                                <button className="w-[50%] cursor-pointer bg-[#e33b41] flex
                                justify-center items-center gap-2 hover:opacity-90">
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

                        </SwiperSlide>

                        <SwiperSlide className="!w-[307px] shrink-0">

                        <div 
                            className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start 
                            items-center relative rounded-[20px] 
                            border-1 border-gray-300 before:content-['-30%'] before:absolute before:z-1 before:left-0 before:top-[25px] before:w-[80px] before:h-[30px] before:bg-[#f33] before:text-white before:flex before:justify-center before:items-center before:rounded-tr-[8px] before:rounded-br-[8px] before:text-[16px]">
                            
                            <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden">
                                <img 
                                    src="https://bonee.blob.core.windows.net/images/fc8e5871-4282-7903-b56a-dc88a0954be5_2.webp" 
                                    className="hover:scale-110 duration-500" 
                                    alt="slider item img"/>
                            </span>

                            <div className="w-full h-auto flex justify-center items-center mt-2">
                                <p className="[body.dark_&]:text-white text-[#515151] font-[600]
                                 text-[18px] uppercase">
                                    Popular Combo
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

                                <button className="w-[50%] cursor-pointer bg-[#e33b41] flex
                                 justify-center items-center gap-2 hover:opacity-90">
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

                        </SwiperSlide>

                        <SwiperSlide className="!w-[307px] shrink-0">

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

                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </>
    )
};

export default SliderOffers;