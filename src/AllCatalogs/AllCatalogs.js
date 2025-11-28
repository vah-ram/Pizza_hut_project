import React, { use, useEffect, useState } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import AboutMenu from "../AboutMenu/AboutMenu";
import { useFetcher, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MobileProductCard from "../MobileProductCard/MobileProductCard";
import CatalogItem from "./CatalogItem";
import LanguageBar from "../LanguageBar/LanguageBar";
import MobileCatalogMenu from "./MobileCatalogMenu";
import CatalogItemTable from "./CatalogItemTable";

function AllCatalogs({ isMobile, currentUser }) {
  const navigate = useNavigate();
  const { type } = useParams();

  const [language, setLanguage] = useState("en");
  const [menuTask, setMenuTask] = useState(false);
  const [gridOrTask, setGridOrTask] = useState("grid");

  useEffect(() => {
    const products = document.querySelectorAll(".products .product");

    products.forEach((item, i) => {
      item.addEventListener("click", () => {
        products.forEach((prevs) => {
          prevs.classList.remove("active");
        });

        item.classList.add("active");
      });
    });

   const directions = document.querySelectorAll(".directionDiv .directionBtn");

    directions.forEach((item, i) => {
      item.addEventListener("click", () => {
        directions.forEach((prevs) => {
          prevs.classList.remove("active");
        });

        item.classList.add("active");
      });
    });

  })

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => setLoading(false), 700);
  }, [type]);

  const { t } = useTranslation();

  const openLanguageBar = () => {
    const body = document.querySelector("body");

    if (!body.classList.contains("languageActive")) {
      body.classList.add("languageActive");
    } else {
      body.classList.remove("languageActive");
    }
  };

  const categories = [
    {
      key: "special_offer",
      imageUrl:
        "https://bonee.blob.core.windows.net/images/f57285e4-5fcc-f853-b25f-1a2e99f65082_1.jpg",
      route: "/catalogs/special-offers",
      textKey: "categorie_special_offer",
    },
    {
      key: "melts",
      imageUrl:
        "https://bonee.blob.core.windows.net/images/e9171210-70dc-6708-a274-d9cd672f7953_3.webp",
      route: "/catalogs/melts",
      textKey: "categorie_melt",
    },
    {
      key: "pizzas",
      imageUrl:
        "https://bonee.blob.core.windows.net/images/c78db5a5-6fd9-b96c-af40-38f96adb0962_3.webp",
      route: "/catalogs/pizzas",
      textKey: "categorie_pizzas",
    },
    {
      key: "pizza_hot_dog",
      imageUrl:
        "https://bonee.blob.core.windows.net/images/9dd355b0-9e55-2a66-18ab-8288b16edd6f_3.webp",
      route: "/catalogs/pizza-hot-dog",
      textKey: "categorie_pizza_hot_dog",
    },
    {
      key: "salads",
      imageUrl:
        "https://bonee.blob.core.windows.net/images/d2fb20b5-d183-c850-ceac-cb1e8b1b962d_3.webp",
      route: "/catalogs/salads",
      textKey: "categorie_salads",
    },
    {
      key: "burgers_sandwiches",
      imageUrl:
        "https://bonee.blob.core.windows.net/images/d51ed5d9-6431-0c2f-4266-fa3a0a85d8d0_3.webp",
      route: "/catalogs/burgers-sandwiches",
      textKey: "categorie_burgers_sandwiches",
    },
    {
      key: "snacks",
      imageUrl:
        "https://bonee.blob.core.windows.net/images/b7437126-6bca-d2ac-d547-df490de15048_3.webp",
      route: "/catalogs/snacks",
      textKey: "categorie_snacks",
    },
    {
      key: "desserts",
      imageUrl:
        "https://bonee.blob.core.windows.net/images/a1bd7070-a5d8-0c9d-6ccc-fb425384eb4f_3.webp",
      route: "/catalogs/desserts",
      textKey: "categorie_desserts",
    },
    {
      key: "beverages",
      imageUrl:
        "https://bonee.blob.core.windows.net/images/7d5263b7-35c6-fe37-a3f9-6965fccf5597_3.webp",
      route: "/catalogs/beverages",
      textKey: "categorie_beverages",
    },
    {
      key: "sauces",
      imageUrl:
        "https://bonee.blob.core.windows.net/images/d7292f08-27e3-aff4-9dd9-41ad7b20a123_3.webp",
      route: "/catalogs/sauces",
      textKey: "categorie_sauces",
    },
  ];

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
                            justify-center items-center 
                            max-md:w-[4rem] max-md:h-[4rem]"
            >
              <span
                className="w-[5rem] h-[5rem] rounded-full border-3
                             border-r-transparent border-b-transparent
                            border-[#E33B41] animate-spin 
                            max-md:w-[3rem] max-md:h-[3rem]"
              />
            </span>
          </div>
        </>
      ) : (
        ""
      )}

      <div
        className="w-full h-[60px] hidden z-[100] fixed top-0 left-0 
             items-center justify-between max-md:flex 
             bg-white [body.dark_&]:bg-[#2e2e2e] "
      >
        <div className="flex gap-3 items-center ml-3">
          <button
            className="w-[40px] h-[40px] flex items-center justify-center
                           border-1 border-gray-200 rounded-xl outline-none
                           cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
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
            {t("menu")}
          </h2>
        </div>

        <div className="flex gap-2 pr-3">
          <div
            className="w-auto h-[40px] 
              border-1 rounded-[12px] border-[#ebebeb] 
              flex overflow-hidden [body.dark_&]:border-[#FFF4] 
              directionDiv"
          >
            <button
              className="directionBtn w-[40px] h-[40px] flex items-center 
                justify-center cursor-pointer bg-transparent active
                 [.active]:bg-[rgb(235,235,235)] rounded-[12px]" 
                 onClick={() => setGridOrTask("grid")}
            >

              {
                gridOrTask === "grid" 
                ?
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="6.5" y="5" width="5" height="5" fill="#e33b41" />
                    <rect x="13" y="5" width="5" height="5" fill="#e33b41" />
                    <rect x="6.5" y="11.5" width="5" height="5" fill="#e33b41" />
                    <rect x="13" y="11.5" width="5" height="5" fill="#e33b41" />
                  </svg>
                :
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="6.5" y="5" width="5" height="5" fill="#9E9E9E" />
                    <rect x="13" y="5" width="5" height="5" fill="#9E9E9E" />
                    <rect x="6.5" y="11.5" width="5" height="5" fill="#9E9E9E" />
                    <rect x="13" y="11.5" width="5" height="5" fill="#9E9E9E" />
                  </svg>
              }
              
            </button>

            <button
              className="directionBtn w-[40px] h-[40px] flex items-center 
              justify-center cursor-pointer bg-transparent  
              [.active]:bg-[rgb(235,235,235)] rounded-[12px]" 
              onClick={() => setGridOrTask("task")}
            >
              {
                gridOrTask === "task" 
                ?
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect x="3" y="4" width="3" height="4" rx="0.5" fill="#e33b41" />
                  <rect x="3" y="10" width="3" height="4" rx="0.5" fill="#e33b41"/>
                  <rect  x="3"  y="16"  width="3"  height="4"  rx="0.5"  fill="#e33b41"/>

                  <rect  x="8"  y="4"  width="13"  height="4"  rx="0.5"  fill="#e33b41"/>
                  <rect  x="8"  y="10"  width="13"  height="4"  rx="0.5"  fill="#e33b41"/>
                  <rect  x="8"  y="16"  width="13"  height="4"  rx="0.5"  fill="#e33b41"/>
                </svg>
              :
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect x="3" y="4" width="3" height="4" rx="0.5" fill="#9E9E9E" />
                  <rect x="3" y="10" width="3" height="4" rx="0.5" fill="#9E9E9E"/>
                  <rect  x="3"  y="16"  width="3"  height="4"  rx="0.5"  fill="#9E9E9E"/>

                  <rect  x="8"  y="4"  width="13"  height="4"  rx="0.5"  fill="#9E9E9E"/>
                  <rect  x="8"  y="10"  width="13"  height="4"  rx="0.5"  fill="#9E9E9E"/>
                  <rect  x="8"  y="16"  width="13"  height="4"  rx="0.5"  fill="#9E9E9E"/>
                </svg>
              }
              
            </button>
          </div>

          <button
            className="hidden w-[40px] h-[40px] items-center justify-center
                        cursor-pointer rounded-xl bg-transparent border border-1 
                        border-gray-200 max-md:flex p-1"
            onClick={openLanguageBar}
          >
            <img
              src={
                language === "en"
                  ? "https://bonee.blob.core.windows.net/languages/icons/us.png"
                  : language === "ru"
                  ? "https://bonee.blob.core.windows.net/languages/icons/ru.png"
                  : language === "am"
                  ? "	https://bonee.blob.core.windows.net/languages/icons/arm.png"
                  : ""
              }
              className="w-[28px] h-[17px]"
              alt=""
            />
          </button>

          <button
            className="hidden w-[40px] h-[40px] items-center justify-center
                            cursor-pointer rounded-xl bg-[#e33b41] max-md:flex"
            onClick={() => navigate("/search")}
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/searchWhite.svg"
              className="w-[18px] h-[18px]"
              alt=""
            />
          </button>
        </div>
      </div>

      <section
        className="w-full h-auto mt-[100px] px-[3vw] pb-[5vw] 
                flex flex-col items-center justify-between gap-5
                justify-start [body.isMobile_&]:mt-[60px] 
                max-md:pb-[30vw] [body.dark_&]:bg-[#2e2e2e]"
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
            className="w-[70vw] h-[42px] flex gap-3 
            items-center max-lg:gap-3"
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
                    [body.isMobile_&]:top-[0px] [body.isMobile_&]:mt-0 "
        >
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="w-[7.5vw] h-[5vw] flex rounded-[1vw] relative bg-cover
               cursor-pointer product [.active]:border-[#e33b41] [.active]:border-3 
               overflow-hidden"
              style={{ backgroundImage: `url(${cat.imageUrl})` }}
              onClick={() => navigate(cat.route)}
            >
              <span
                className="w-full h-[40px] absolute bottom-0 flex
               items-center justify-center bg-[#0016]"
              >
                <p
                  className="uppercase text-[calc(8px+.3vw)] 
                  text-white text-center"
                >
                  {t(cat.textKey)}
                </p>
              </span>
            </div>
          ))}
        </div>

        <footer className="w-full flex flex-col mt-[1vw] max-md:pt-[30px] [body.dark_&]:bg-[#2e2e2e]">
          <h2
            className="text-[25px] text-[#515151]
                         [body.dark_&]:text-white font-[600] uppercase"
          >
            {t("offer_special_offer")}
          </h2>

          <div
            className={`w-full grid [body.dark_&]:bg-[#2e2e2e] 
            ${
              gridOrTask === "grid"
                ? "max-md:grid max-md:grid-cols-2 grid-cols-5 gap-[3vw] max-md:gap-2"
                : `max-md:flex max-md:flex-col`
            }`}
            alt="filtered products div"
          >
            {true ? (
              <>
                
                {
                  gridOrTask === "grid" ?
                  [5,2,2,3,2].map((item, i) => (
                    <CatalogItem 
                      isMobile={isMobile} 
                      setMenuTask={setMenuTask} 
                      id={i}/>
                  ))

                  :

                  [5,2,2,3,2].map((item, i) => (
                    <CatalogItemTable 
                      isMobile={isMobile} 
                      setMenuTask={setMenuTask} 
                      id={i}/>
                  ))
                }
              </>
            ) : (
              ""
            )}
          </div>
        </footer>
      </section>

      <AboutMenu />
      <LanguageBar setLanguage={setLanguage} />

      <MobileCatalogMenu />

      {menuTask ? <MobileProductCard setMenuTask={setMenuTask} /> : ""}
    </>
  );
}

export default AllCatalogs;
