import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import "./App.css"

function App() {
  
  const [ modeValue, setModeValue ] = useState('');

  const callDarkAndLightMode = () => {
    const main = document.querySelector('main');

    if(!main.classList.contains('dark')) {
      main.classList.add('dark');
      setModeValue(true)
    } else {
      main.classList.remove('dark');
      setModeValue(false)
    }
  };

  return (
      <main className="duration-300">

        <header 
          className="w-full h-[80px] flex items-center justify-between px-20 fixed top-0 bg-[#FFF] z-[10] duration-300">
          <div className="w-auto h-full flex gap-2 items-center">
              <img 
                  src="./Img/pizza-hut-logo.png" 
                  className="w-[40px] h-[40px]" 
                  alt="pizza hut logo"/>

              <div className="flex-col gap-[-10px]">
                  <p className="text-[15px] text-[#9d9d9d] font-[700] leading-[19px]">
                      Welcome to
                  </p>

                  <h2 className="text-[19px] text-[#e33b41] font-[600] leading-[19px]">
                      Pizza Hut Armenia Menu
                  </h2>
              </div>
          </div>

          <button 
              className="w-[130px] h-[36px] bg-[#e33b41] rounded-[4px] flex justify-center items-center gap-2 text-[14px] font-sans-serif text-white cursor-pointer">
              
              <img 
                  src="./Img/moped-icon.png" 
                  className="w-[18px] h-[18px]"
                  alt=""/>

              <p className="text-[15px] font-sans">
                  DELIVERY
              </p>
          </button>

          <div className="w-auto h-full flex items-center gap-4">
              <button 
                className={
                  `w-[60px] h-[26px] flex ${modeValue ? "flex-row-reverse" : "flex-row"} items-center gap-[3px] rounded-full border-1 border-[#e7e7e7ff] px-[3px] cursor-pointer`
                }
                onClick={callDarkAndLightMode}>
                  <span 
                    className="w-[21px] h-[21px] shrink-0 block 
                    rounded-full bg-[#e33b41]"/>

                  <p className="text-[9px] font-[700] text-[#9d9d9d] leading-[10px]">
                      {modeValue ? "Dark Mode" : "Light Mode"}
                  </p>
              </button>

              <button className="w-auto h-auto cursor-pointer">
                  <img 
                      src="./Img/usa.png" 
                      className="w-[30px] h-[18px]"
                      alt=""/>
              </button>

              <button className="w-auto h-auto cursor-pointer">
                  <img 
                      src="./Img/user-icon.svg" 
                      className="w-[22px] h-[22px]"
                      alt=""/>
              </button>

              <button className="w-auto h-auto cursor-pointer relative after:content-['0'] after:absolute after:right-[-5px] after:top-[-5px] after:w-[20px] after:h-[20px] after:rounded-full after:bg-[#e33b41] after:flex after:justify-center after:items-center after:text-white">
                  <img 
                      src="./Img/store-icon.svg" 
                      className="w-[25px] h-[25px]"
                      alt=""/>
              </button>

              <button className="w-auto h-auto cursor-pointer">
                  <img 
                      src="./Img/menu-icon.svg" 
                      className="w-[22px] h-[22px]"
                      alt=""/>
              </button>
          </div>
      </header>

      <section className="w-full h-[175px] px-20 flex items-center justify-between gap-5 mt-[80px]">
          <button 
              className="w-[250px] h-[42px] flex items-center justify-center rounded-[10px] bg-[#3d3d3d] cursor-pointer">
              <p className="text-white text-[17px] font-sans-serif font-[500]">
                  ALL PRODUCTS
              </p>
          </button>

          <form 
              className="w-[81%] h-[42px] flex gap-2 items-center" 
              onsubmit="event.preventDefault()">

              <input 
                  type="text" 
                  placeholder="Search"
                  className=" w-[100%] h-full border-1 border-[#e7e7e7ff] 
                  rounded-[10px] p-3 outline-none text-sm"
                  maxLength={60}
                  id="search__input"/>

              <button 
                  className="w-[41px] h-full bg-[#e33b41] flex items-center justify-center rounded-[10px] cursor-pointer">
                  <img 
                      src="./Img/search-icon.svg" 
                      class="w-[15px] h-[15px]" 
                      alt=""/>
              </button>
          </form>
      </section>

      <section className="w-full px-17 mt-3 flex flex-col">
          <div className="flex justify-between">
              <div className="flex gap-4">
                  <img 
                      src="./Img/categories-icon.svg" 
                      className="w-[35px] h-[35px]" 
                      alt="categories icon"/>
                  <p className="text-[25px] text-[#515151] font-[600]">
                      CATEGORIES
                  </p>
              </div>

              <div className="flex gap-3 h-full items-center">
                  <p className="text-[#e33b41] text-[16px] cursor-pointer">
                      See All
                  </p>

                  <div className="flex">
                      <button 
                          className="prev-btn w-[40px] h-[40px] flex items-center justify-center border-1 border-gray-300 rounded-tl-[10px] rounded-bl-[10px] cursor-pointer">
                          <img 
                              src="https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-05-512.png" 
                              className="w-[33px] h-[33px]" 
                              alt=""/>
                      </button>

                      <button 
                          className="next-btn w-[40px] h-[40px] flex items-center justify-center border-1 border-gray-300 rounded-tr-[10px] rounded-br-[10px] cursor-pointer">
                          <img 
                              src="https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-06-512.png" 
                              className="w-[33px] h-[33px]" 
                              alt=""/>
                      </button>
                  </div>
              </div>
          </div>

          <div 
              className="w-full h-auto flex gap-[30px] 
              mt-[35px] overflow-hidden cursor-grab">

              <Swiper 
                      spaceBetween={20}
                      slidesPerView={6}
                      modules={[ Navigation ]}
                      navigation={{
                        prevEl: ".prev-btn",
                        nextEl: ".next-btn"
                      }}>

                <SwiperSlide>
                  <div className="w-[266px] h-[266px] shrink-[0] relative rounded-[25px] overflow-hidden">
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

                <SwiperSlide>
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

                <SwiperSlide>
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

                <SwiperSlide>
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

                <SwiperSlide>
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

                <SwiperSlide>
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

                <SwiperSlide>
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

                <SwiperSlide>
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

                <SwiperSlide>
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

                <SwiperSlide>
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

      <section className="w-full px-17 mt-[100px] flex flex-col">
          <div className="flex justify-between">
              <div className="flex gap-4">
                  <img 
                      src="https://bonee.blob.core.windows.net/images/f57285e4-5fcc-f853-b25f-1a2e99f65082_1.jpg" 
                      className="w-[35px] h-[35px]" 
                      alt="categories icon"/>
                  <p className="text-[25px] text-[#515151] font-[600]">
                      SPECIAL OFFERS
                  </p>
              </div>

              <div className="flex gap-3 h-full items-center">

                  <div className="flex">
                      <button 
                          className="pizza-prev-btn w-[40px] h-[40px] flex items-center justify-center border-1 border-gray-300 rounded-tl-[10px] rounded-bl-[10px] cursor-pointer">
                          <img 
                              src="https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-05-512.png" 
                              className="w-[33px] h-[33px]"  
                              alt=""/>
                      </button>

                      <button 
                          className="pizza-next-btn w-[40px] h-[40px] flex items-center justify-center border-1 border-gray-300 rounded-tr-[10px] rounded-br-[10px] cursor-pointer">
                          <img 
                              src="https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-06-512.png" 
                              className="w-[33px] h-[33px]" 
                              alt=""/>
                      </button>
                  </div>

              </div>
          </div>

          <div 
              className="w-full h-[500px] flex gap-[30px] 
              mt-[35px] overflow-hidden cursor-grab">

              <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    modules={[ Navigation ]}
                    navigation={{
                        prevEl: ".pizza-prev-btn",
                        nextEl: ".pizza-next-btn"
                    }}>
                
                <SwiperSlide>
                  <div 
                    className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start 
                    items-center relative rounded-[20px] cursor-pointer
                    border-1 border-gray-300 before:content-['-20%'] before:absolute before:z-1 before:left-0 before:top-[25px] before:w-[80px] before:h-[30px] before:bg-[#f33] before:text-white before:flex before:justify-center before:items-center before:rounded-tr-[8px] before:rounded-br-[8px] before:text-[16px]">

                    <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden">
                        <img 
                            src="https://bonee.blob.core.windows.net/images/3cb64dce-f9bc-6b0a-dd0f-dc785729de67_2.webp" 
                            className="hover:scale-110 duration-500"
                            alt="slider item img"/>
                    </span>

                    <div className="w-full h-auto flex justify-center items-center mt-2">
                        <p className="text-black font-[600] text-[18px] uppercase">
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

                        <button className="w-[50%] cursor-pointer bg-[#e33b41] flex justify-center items-center gap-2">
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

                <SwiperSlide>
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
                          <p className="text-black font-[600] text-[18px] uppercase">
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

                          <button className="w-[50%] cursor-pointer bg-[#e33b41] flex justify-center items-center gap-2">
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

                <SwiperSlide>
                  <div 
                      className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start 
                      items-center relative rounded-[20px] 
                      border-1 border-gray-300 before:content-['-20%'] before:absolute before:z-1  before:left-0 before:top-[25px] before:w-[80px] before:h-[30px] before:bg-[#f33] before:text-white before:flex before:justify-center before:items-center before:rounded-tr-[8px] before:rounded-br-[8px] before:text-[16px]">

                      <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden">
                          <img 
                              src="https://bonee.blob.core.windows.net/images/4f0eb176-764e-f85d-3ca1-187d69950caf_2.webp" 
                              className="hover:scale-110 duration-500"
                              alt="slider item img"/>
                      </span>
                      
                      <div className="w-full h-auto flex justify-center items-center mt-2">
                          <p className="text-black font-[600] text-[18px] uppercase">
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

                          <button className="w-[50%] cursor-pointer bg-[#e33b41] flex justify-center items-center gap-2">
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
              
                <SwiperSlide>
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
                          <p className="text-black font-[600] text-[18px] uppercase">
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

                          <button className="w-[50%] cursor-pointer bg-[#e33b41] flex justify-center items-center gap-2">
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

                <SwiperSlide>
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
                          <p className="text-black font-[600] text-[18px] uppercase">
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

                          <button className="w-[50%] cursor-pointer bg-[#e33b41] flex justify-center items-center gap-2">
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

                <SwiperSlide>
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
                          <p className="text-black font-[600] text-[18px] uppercase">
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

                          <button className="w-[50%] cursor-pointer bg-[#e33b41] flex justify-center items-center gap-2">
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

                <SwiperSlide>
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
                          <p className="text-black font-[600] text-[18px] uppercase">
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

                          <button className="w-[50%] cursor-pointer bg-[#e33b41] flex justify-center items-center gap-2">
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

                <SwiperSlide>
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
                          <p className="text-black font-[600] text-[18px] uppercase">
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

                          <button className="w-[50%] cursor-pointer bg-[#e33b41] flex justify-center items-center gap-2">
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

                <SwiperSlide>
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
                          <p className="text-black font-[600] text-[18px] uppercase">
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

                          <button className="w-[50%] cursor-pointer bg-[#e33b41] flex justify-center items-center gap-2">
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

                <SwiperSlide>
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
                          <p className="text-black font-[600] text-[18px] uppercase">
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

                          <button className="w-[50%] cursor-pointer bg-[#e33b41] flex justify-center items-center gap-2">
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

      <footer 
        className="w-full h-[400px] bg-[#3d3d3d]
       mt-[70px] pl-[80px] pt-[40px] pr-[80px] body.dark:bg-red-500"
       id="last_about--part">
          <div className="flex">
              <ul className="flex flex-col gap-1">
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

              <span className="flex gap-2 h-[20px] items-center ml-5">
                <img 
                  src="/Img/phone.svg" 
                  className="w-[21px] h-[21px]"
                  alt=""/>

                  <a href="tel:060505505" className="text-white">
                    060505505
                  </a>
              </span>

              <span className="flex gap-2 h-[20px] items-center ml-10">
                <img 
                  src="/Img/mail.svg" 
                  className="w-[21px] h-[21px]"
                  alt=""/>

                  <a href="#" className="text-white">
                    delivery@derjavas.am
                  </a>
              </span>

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
                  className="text-white text-[14px]">Home</a>
              </li>

              <li>
                <a 
                  href="https://pizza-hut.am/us/about?sellingType=isActiveDelivery&mode=light"
                  target="blank"
                  className="text-white text-[14px]">About Us</a>
              </li>

              <li>
                <a 
                  href="https://bonee.net/privacy-policy-en.html"
                  target="blank"
                  className="text-white text-[14px]">Terms and Conditions</a>
              </li>

              <li>
                <a 
                  href="https://bonee.net/privacy-policy-en.html"
                  target="blank"
                  className="text-white text-[14px]">Privacy policy</a>
              </li>
            </ul>

            <p className="text-[#969696] text-[14px]">
              @ 2024 Copyright: bonee.net
            </p>
          </div>

      </footer>

      </main>
  );
}

export default App;
