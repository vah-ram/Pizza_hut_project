import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { getProductHost } from "../utils/Hosts";

function SliderOffers({ currentLang }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const { t } = useTranslation();

    useEffect(() => {
    const getProducts = async () => {

      try {
        const res = await axios.get(getProductHost, {
          params: { type: "special_offer" },
        });

        if (res.data.products) {
          setProducts(res.data.products);
        }
      } catch (err) {
        console.error(err);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <section className="w-full px-17 mt-[100px] flex flex-col max-lg:px-4 max-md:hidden">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img
              src="https://bonee.blob.core.windows.net/images/f57285e4-5fcc-f853-b25f-1a2e99f65082_1.jpg"
              className="w-[35px] h-[35px]"
              alt="categories icon"
            />
            <p
              className="text-[25px] text-[#515151] 
                            font-[600] [body.dark_&]:text-white uppercase"
            >
              {t("offer_special_offer")}
            </p>
          </div>

          <div className="flex gap-3 h-full items-center">
            <div className="flex">
              <button
                className="pizza-prev-btn w-[40px] h-[40px] flex items-center justify-center border-1
                                border-gray-300 rounded-tl-[10px] rounded-bl-[10px] cursor-pointer [main.dark_&]:border-gray-500"
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-05-512.png"
                  className="w-[33px] h-[33px]"
                  alt=""
                />
              </button>

              <button
                className="pizza-next-btn w-[40px] h-[40px] flex items-center justify-center
                                 border-1 border-gray-300 rounded-tr-[10px] rounded-br-[10px] cursor-pointer [main.dark_&]:border-gray-500"
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-06-512.png"
                  className="w-[33px] h-[33px]"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>

        <div
          className="w-full h-[500px] flex shrink-0 gap-[30px] 
                    mt-[35px] overflow-hidden cursor-grab"
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={6}
            modules={[Navigation]}
            navigation={{
              prevEl: ".pizza-prev-btn",
              nextEl: ".pizza-next-btn",
            }}
          >
            {products?.map((item) => (
              <SwiperSlide key={item?.id} className="!w-[307px] shrink-0">
                <div
                  className={`
                    w-[307px] h-[385px] shrink-0 flex flex-col justify-start items-center 
                    relative rounded-[20px] border border-gray-300
                    before:content-['-${item?.sale_percent}\\%'] before:absolute before:z-10
                    before:left-[-7px] before:top-[25px] before:w-[80px] before:h-[30px]
                    before:bg-[#f33] before:text-white before:flex before:justify-center 
                    before:items-center before:rounded-[8px] 
                    before:text-[16px] cursor-pointer
                  `}
                  onClick={() => navigate(`/product/${item.id}`)}
                >

                  <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden group">
                    <img
                      src={item.image_url}
                      className="group-hover:scale-110 duration-500"
                      alt="slider item img"
                    />
                  </span>

                  <div className="w-full flex justify-center items-center mt-2">
                    <p className="text-[#515151] [body.dark_&]:text-white font-[600] text-[18px] uppercase text-center">
                      {
                        currentLang === "en" 
                        ?
                        item?.title
                        : currentLang === "ru" 
                        ? item?.title_ru 
                        : currentLang === "am" 
                        ? item?.title_am 
                        : ''
                      }
                    </p>
                  </div>

                  <div className="w-[90%] h-[44px] absolute bottom-[-22px] rounded-[10px] flex overflow-hidden">
                    <button className="w-[50%] cursor-pointer bg-[#3d3d3d]">
                      <p className="text-[#e33b41] text-[17px] font-[800] leading-[15px]">
                        {item.price}
                      </p>

                      <p className="text-[#9d9d9d] text-[12px] line-through">
                        {item.old_price}
                      </p>
                    </button>

                    <button className="w-[50%] cursor-pointer bg-[#e33b41] flex justify-center items-center
                     gap-2 hover:opacity-90">
                      <img
                        src="./Img/pizza-store-icon.svg"
                        className="w-[22px] h-[30px]"
                        alt=""
                      />
                      <p className="text-white text-[14px]">ADD</p>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default SliderOffers;
