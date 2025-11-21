import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"

function SliderCategories({ isMobile }) {
    return (
        <>
           <section className="w-full px-17 mt-3 max-lg:px-4 max-md:hidden">
                <div className="flex justify-between">
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

                    <div className="flex gap-3 h-full items-center">
                        <p className="text-[#e33b41] text-[16px] cursor-pointer">
                            See All
                        </p>

                        <div className="flex">
                            <button 
                                className="prev-btn w-[40px] h-[40px] flex items-center justify-center border-1
                                 border-gray-300 rounded-tl-[10px] rounded-bl-[10px] cursor-pointer [main.dark_&]:border-gray-500">
                                <img 
                                    src="https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-05-512.png" 
                                    className="w-[33px] h-[33px]" 
                                    alt=""/>
                            </button>

                            <button 
                                className="next-btn w-[40px] h-[40px] flex items-center justify-center border-1
                                 border-gray-300 rounded-tr-[10px] rounded-br-[10px] cursor-pointer [main.dark_&]:border-gray-500">
                                <img 
                                    src="https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-06-512.png" 
                                    className="w-[33px] h-[33px]" 
                                    alt=""/>
                            </button>
                        </div>
                    </div>
                </div>

                <div 
                    className="w-full h-auto gap-[30px] 
                    mt-[35px] overflow-hidden cursor-grab">

                    <Swiper 
                            spaceBetween={20}
                            slidesPerView={6}
                            modules={[ Navigation ]}
                            navigation={{
                                prevEl: ".prev-btn",
                                nextEl: ".next-btn"
                            }}>

                        <SwiperSlide className="!w-[266px] shrink-0">

                        <div 
                        className="w-full h-full shrink-[0] 
                        relative rounded-[25px] overflow-hidden">
                            <img 
                                src="https://bonee.blob.core.windows.net/images/f57285e4-5fcc-f853-b25f-1a2e99f65082_1.jpg" 
                                className="hover:scale-110 duration-500" 
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex justify-center items-center bg-[#0018]">
                                <p className="text-white font-[600] text-[18px]">
                                    SPECIAL OFFERS
                                </p>
                            </div>
                        </div>

                        </SwiperSlide>

                        <SwiperSlide className="!w-[266px] shrink-0">

                        <div className="w-[266px] h-[266px] shrink-[0] relative rounded-[25px] overflow-hidden ">
                            <img 
                                src="https://bonee.blob.core.windows.net/images/e9171210-70dc-6708-a274-d9cd672f7953_3.webp" 
                                className="hover:scale-110 duration-500" 
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex justify-center items-center bg-[#0018]">
                                <p className="text-white font-[600] text-[18px]">
                                    MELTS
                                </p>
                            </div>
                        </div>

                        </SwiperSlide>

                        <SwiperSlide className="!w-[266px] shrink-0">

                        <div className="w-[266px] h-[266px] shrink-[0] relative rounded-[25px] overflow-hidden">
                            <img 
                                src="https://bonee.blob.core.windows.net/images/c78db5a5-6fd9-b96c-af40-38f96adb0962_3.webp" 
                                className="hover:scale-110 duration-500" 
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex justify-center items-center bg-[#0018]">
                                <p className="text-white font-[600] text-[18px]">
                                    PIZZAS
                                </p>
                            </div>
                        </div>

                        </SwiperSlide>

                        <SwiperSlide className="!w-[266px] shrink-0">

                        <div className="w-[266px] h-[266px] shrink-[0] relative rounded-[25px] overflow-hidden ">
                            <img 
                                src="https://bonee.blob.core.windows.net/images/9dd355b0-9e55-2a66-18ab-8288b16edd6f_3.webp"
                                className="hover:scale-110 duration-500" 
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex justify-center items-center bg-[#0018]">
                                <p className="text-white font-[600] text-[18px]">
                                    PIZZA HOT-DOG
                                </p>
                            </div>
                        </div>

                        </SwiperSlide>

                        <SwiperSlide className="!w-[266px] shrink-0">

                        <div className="w-[266px] h-[266px] shrink-[0] relative rounded-[25px] overflow-hidden ">
                            <img 
                                src="https://bonee.blob.core.windows.net/images/d2fb20b5-d183-c850-ceac-cb1e8b1b962d_3.webp"
                                className="hover:scale-110 duration-500" 
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex justify-center items-center bg-[#0018]">
                                <p className="text-white font-[600] text-[18px]">
                                    SALADS
                                </p>
                            </div>
                        </div>

                        </SwiperSlide>

                        <SwiperSlide className="!w-[266px] shrink-0">

                        <div className="w-[266px] h-[266px] shrink-[0] relative rounded-[25px] overflow-hidden">
                            <img 
                                src="https://bonee.blob.core.windows.net/images/d51ed5d9-6431-0c2f-4266-fa3a0a85d8d0_3.webp" 
                                className="hover:scale-110 duration-500" 
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex justify-center items-center bg-[#0018]">
                                <p className="text-white font-[600] text-[18px]">
                                    BURGERS & SANDWICHES
                                </p>
                            </div>
                        </div>

                        </SwiperSlide>

                        <SwiperSlide className="!w-[266px] shrink-0">

                            <div className="w-[266px] h-[266px] shrink-[0] relative rounded-[25px] overflow-hidden">
                                <img 
                                    src="https://bonee.blob.core.windows.net/images/b7437126-6bca-d2ac-d547-df490de15048_3.webp" 
                                    className="hover:scale-110 duration-500" 
                                    alt="slider item img"/>

                                <div className="w-full h-[50px] absolute bottom-0 flex justify-center items-center bg-[#0018]">
                                    <p className="text-white font-[600] text-[18px]">
                                        SNACKS
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="!w-[266px] shrink-0">

                        <div className="w-[266px] h-[266px] shrink-[0] relative rounded-[25px] overflow-hidden">
                            <img 
                                src="https://bonee.blob.core.windows.net/images/a1bd7070-a5d8-0c9d-6ccc-fb425384eb4f_3.webp" 
                                className="hover:scale-110 duration-500" 
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex justify-center items-center bg-[#0018]">
                                <p className="text-white font-[600] text-[18px]">
                                    DESSERTS
                                </p>
                            </div>
                        </div>

                        </SwiperSlide>

                        <SwiperSlide className="!w-[266px] shrink-0">

                        <div className="w-[266px] h-[266px] shrink-[0] relative rounded-[25px] overflow-hidden">
                            <img 
                                src="https://bonee.blob.core.windows.net/images/7d5263b7-35c6-fe37-a3f9-6965fccf5597_3.webp" 
                                className="hover:scale-110 duration-500" 
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex justify-center items-center bg-[#0018]">
                                <p className="text-white font-[600] text-[18px]">
                                    BEVERAGES
                                </p>
                            </div>
                        </div>

                        </SwiperSlide>

                        <SwiperSlide className="!w-[266px] shrink-0">

                        <div className="w-[266px] h-[266px] shrink-[0] relative rounded-[25px] overflow-hidden">
                            <img 
                                src="https://bonee.blob.core.windows.net/images/d7292f08-27e3-aff4-9dd9-41ad7b20a123_3.webp" 
                                className="hover:scale-110 duration-500" 
                                alt="slider item img"/>

                            <div className="w-full h-[50px] absolute bottom-0 flex justify-center items-center bg-[#0018]">
                                <p className="text-white font-[600] text-[18px]">
                                    SAUCES
                                </p>
                            </div>
                        </div>
                        
                        </SwiperSlide>
                    </Swiper>
                    
                </div>

            </section>
        </>
    )
};

export default SliderCategories;