import React, { useEffect, useState } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import AboutMenu from "../AboutMenu/AboutMenu";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MobileProductCard from "../MobileProductCard/MobileProductCard";
import ProductCard from "../ProductCard/ProductCard";

function AllCatalogs({ isMobile, currentUser }) {
  const navigate = useNavigate();
  const { type } = useParams();

  const [menuTask,setMenuTask] = useState(false);

  const products = document.querySelectorAll(".products .product");

  products.forEach((item, i) => {
    item.addEventListener("click", () => {
      products.forEach((prevs) => {
        prevs.classList.remove("active");
      });

      item.classList.add("active");
    });
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => setLoading(false), 700);
  }, [type]);

  const { t } = useTranslation();

  return (
    <>
      {isMobile ? "" : <HeaderMenu currentUser={currentUser} />}

      {loading ? (
        <>
          <HeaderMenu currentUser={currentUser} />

          <div
            className="mt-[80px] fixed inset-0 z-[102] bg-white flex items-center
                    justify-center bg-[#FFF] [body.dark_&]:bg-[#2e2e2e]"
          >
            <span
              className="w-[7rem] h-[7rem] rounded-full border-3
                             border-r-transparent border-b-transparent
                            border-[#E33B41] animate-spin flex
                            justify-center items-center"
            >
              <span
                className="w-[5rem] h-[5rem] rounded-full border-3
                             border-r-transparent border-b-transparent
                            border-[#E33B41] animate-spin"
              />
            </span>
          </div>
        </>
      ) : (
        ""
      )}

      <div
        className="w-full h-[60px] hidden absolute top-0 left-0 shadow-md
             items-center max-md:flex"
      >
        <div className="flex gap-3 items-center ml-2">
          <button
            className="w-[40px] h-[40px] flex items-center justify-center
                           border-1 border-gray-200 rounded-xl outline-none
                           cursor-pointer"
            onClick={() => {navigate(-1)}}
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
              className="w-[20px] h-[20px]"
            />
          </button>

          <h2
            className="text-[17px] text-[#515151] font-[600]
                 uppercase [body.dark_&]:text-white"
          >
            Menu
          </h2>
        </div>
      </div>

      <section
        className="w-full h-auto mt-[100px] px-[3vw]
                flex flex-col items-center justify-between gap-5
                justify-start [body.isMobile_&]:mt-[60px]"
      >
        <span
          className="w-full flex gap-5 items-center mt-5
                [body.isMobile_&]:hidden"
        >
          <a
            className="text-[16px] text-[#9D9D9D] cursor-pointer
                        [body.dark_&]:text-white"
            onClick={() => navigate("/")}
          >
            {t("main_page")}
          </a>

          <img
            src="https://www.pizza-hut.am/assets/images/app_2/arrow.svg"
            className="w-[6px] rotate-[180deg]"
            alt=""
          />

          <a className="text-[#e33b41] text-[16px]">{t("menu")}</a>
        </span>

        <div className="flex w-full justify-between mt-9 [body.isMobile_&]:hidden">
          <div className="flex gap-4">
            <img
              src="https://pizza-hut.am/assets/images/app_2/categories.svg"
              className="w-[35px] h-[35px]"
              alt="categories icon"
            />

            <p
              className="text-[25px] text-[#515151]
                         [body.dark_&]:text-white font-[600] uppercase"
            >
              {t("categories")}
            </p>
          </div>

          <form
            className="w-[70vw] h-[42px] flex gap-3 items-center max-lg:gap-3"
            onSubmit={(evt) => {
              evt.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder={t("search")}
              className=" w-full h-full border-1 border-[#e7e7e7ff]
                              rounded-[10px] p-3 outline-none text-sm [body.dark_&]:text-white
                              [body.dark_&]:border-[#464646]"
              maxLength={60}
              id="search__input"
            />

            <button
              className="w-[41px] h-full bg-[#e33b41] flex items-center
                            justify-center rounded-[10px] cursor-pointer"
            >
              <img
                src="https://www.pizza-hut.am/assets/images/app_2/searchWhite.svg"
                className="w-[15px] h-[15px]"
                alt=""
              />
            </button>
          </form>
        </div>

        <div
          className="w-full h-[100px] flex
                    justify-center sticky top-[80px]  
                    gap-[3vh] mt-2 products z-[101] bg-white
                    [body.dark_&]:bg-[#2e2e2e] [body.isMobile_&]:hidden
                    [body.isMobile_&]:top-[0px] [body.isMobile_&]:mt-0"
        >
          <div
            className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/f57285e4-5fcc-f853-b25f-1a2e99f65082_1.jpg')]
                    bg-cover cursor-pointer border-transparent product active
                    [.active]:border-[#e33b41] [.active]:border-3"
            onClick={() => navigate("/catalogs/special-offers")}
          >
            <span
              className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl"
            >
              <p className="uppercase text-[1.3vh] text-white text-center">
                {t("categorie_special_offer")}
              </p>
            </span>
          </div>

          <div
            className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/e9171210-70dc-6708-a274-d9cd672f7953_3.webp')]
                    bg-cover cursor-pointer product
                    [.active]:border-[#e33b41] [.active]:border-3"
            onClick={() => navigate("/catalogs/melts")}
          >
            <span
              className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl"
            >
              <p className="uppercase text-[1.3vh] text-white">
                {t("categorie_melt")}
              </p>
            </span>
          </div>

          <div
            className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/c78db5a5-6fd9-b96c-af40-38f96adb0962_3.webp')]
                    bg-cover cursor-pointer product
                    [.active]:border-[#e33b41] [.active]:border-3"
            onClick={() => navigate("/catalogs/pizzas")}
          >
            <span
              className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl"
            >
              <p className="uppercase text-[1.3vh] text-white">
                {t("categorie_pizzas")}
              </p>
            </span>
          </div>

          <div
            className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/9dd355b0-9e55-2a66-18ab-8288b16edd6f_3.webp')]
                    bg-cover cursor-pointer product
                    [.active]:border-[#e33b41] [.active]:border-3"
            onClick={() => navigate("/catalogs/pizza-hot-dog")}
          >
            <span
              className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl"
            >
              <p className="uppercase text-[1.3vh] text-white">
                {t("categorie_pizza_hot_dog")}
              </p>
            </span>
          </div>

          <div
            className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/d2fb20b5-d183-c850-ceac-cb1e8b1b962d_3.webp')]
                    bg-cover cursor-pointer product
                    [.active]:border-[#e33b41] [.active]:border-3"
            onClick={() => navigate("/catalogs/salads")}
          >
            <span
              className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl"
            >
              <p className="uppercase text-[1.3vh] text-white">
                {t("categorie_salads")}
              </p>
            </span>
          </div>

          <div
            className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/d51ed5d9-6431-0c2f-4266-fa3a0a85d8d0_3.webp')]
                    bg-cover cursor-pointer product
                    [.active]:border-[#e33b41] [.active]:border-3"
            onClick={() => navigate("/catalogs/burgers-sandwiches")}
          >
            <span
              className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl"
            >
              <p className="uppercase text-[1.3vh] text-white text-center">
                {t("categorie_burgers_sandwiches")}
              </p>
            </span>
          </div>

          <div
            className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/b7437126-6bca-d2ac-d547-df490de15048_3.webp')]
                    bg-cover cursor-pointer product
                    [.active]:border-[#e33b41] [.active]:border-3"
            onClick={() => navigate("/catalogs/snacks")}
          >
            <span
              className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl"
            >
              <p className="uppercase text-[1.3vh] text-white">
                {t("categorie_snacks")}
              </p>
            </span>
          </div>

          <div
            className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/a1bd7070-a5d8-0c9d-6ccc-fb425384eb4f_3.webp')]
                    bg-cover cursor-pointer product
                    [.active]:border-[#e33b41] [.active]:border-3"
            onClick={() => navigate("/catalogs/desserts")}
          >
            <span
              className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl"
            >
              <p className="uppercase text-[1.3vh] text-white">
                {t("categorie_desserts")}
              </p>
            </span>
          </div>

          <div
            className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/7d5263b7-35c6-fe37-a3f9-6965fccf5597_3.webp')]
                    bg-cover cursor-pointer product
                    [.active]:border-[#e33b41] [.active]:border-3"
            onClick={() => navigate("/catalogs/beverages")}
          >
            <span
              className="w-full h-[40%] absolute bottom-0 flex items-center
                        justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl"
            >
              <p className="uppercase text-[1.3vh] text-white">
                {t("categorie_beverages")}
              </p>
            </span>
          </div>

          <div
            className="w-[7.5vw] h-[10vh] flex rounded-2xl
                    relative bg-[url('https://bonee.blob.core.windows.net/images/d7292f08-27e3-aff4-9dd9-41ad7b20a123_3.webp')]
                    bg-cover cursor-pointer product
                    [.active]:border-[#e33b41] [.active]:border-3"
            onClick={() => navigate("/catalogs/sauces")}
          >
            <span
              className="w-full h-[40%] absolute bottom-0 flex items-center
                            justify-center bg-[#0016] rounded-bl-2xl rounded-br-2xl"
            >
              <p className="uppercase text-[1.3vh] text-white">
                {t("categorie_sauces")}
              </p>
            </span>
          </div>
        </div>

        <footer className="w-full flex flex-col mt-10">
          <h2
            className="text-[25px] text-[#515151]
                         [body.dark_&]:text-white font-[600] uppercase"
          >
            {t("offer_special_offer")}
          </h2>

          <div
            className="w-full mt-3 flex flex-wrap gap-20"
            alt="filtered products div"
          >
            {true ? (
              <>
                <div
                  className="w-[307px] h-[385px] shrink-[0] flex flex-col justify-start
                                        items-center relative rounded-[20px]
                                        border-1 border-gray-300 before:content-['-30%']
                                        before:absolute before:z-1 before:left-0 before:top-[25px]
                                        before:w-[80px] before:h-[30px] before:bg-[#f33]
                                        before:text-white before:flex before:justify-center
                                         before:items-center before:rounded-tr-[8px]
                                         before:rounded-br-[8px] before:text-[16px] cursor-pointer" 
                                         onClick={() => {
                                            isMobile ? setMenuTask(true) : navigate(`/catalog/hi`)
                                         }}
                >
                  <span className="w-[305px] h-[305px] rounded-[20px] overflow-hidden group">
                    <img
                      src="https://bonee.blob.core.windows.net/images/a0bcdc66-7da3-0c1a-3887-396ce30bd05a_2.webp"
                      className="group-hover:scale-110 duration-500"
                      alt="slider item img"
                    />
                  </span>

                  <div className="w-full h-auto flex justify-center items-center mt-2">
                    <p
                      className="[body.dark_&]:text-white text-[#515151] font-[600]
                                 text-[18px] uppercase"
                    >
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

                    <button
                      className="w-[50%] cursor-pointer bg-[#e33b41]
                                            flex justify-center items-center gap-2 hover:opacity-90"
                      onClick={e => e.stopPropagation()}
                    >
                      <img
                        src="https://www.pizza-hut.am/assets/images/app_2/basketPlus.svg"
                        className="w-[22px] h-[30px]"
                        alt=""
                      />

                      <p className="text-white text-[14px]">ADD</p>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </footer>
      </section>

      <AboutMenu />

      {menuTask ? <MobileProductCard setMenuTask={setMenuTask}/> : ''}
    </>
  );
}

export default AllCatalogs;
