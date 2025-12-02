import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SliderCategories from "./Sliders/SliderCategories";
import SliderOffers from "./Sliders/SliderOffers";
import MobileMenu from "./MobileMenuBar/MobileMenu";
import MobilePizzaMenu from "./MobilePizzaMenu/MobilePizzaMenu";
import AboutMenu from "./AboutMenu/AboutMenu";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Project({ isMobile, currentUser, currentLang }) {
    const navigate = useNavigate();

    const { t } = useTranslation();

  return (
      <main className="duration-300 relative">

        <HeaderMenu isMobile={isMobile} currentUser={currentUser}/>

        <MobileMenu currentUser={currentUser}/>

        <MobilePizzaMenu />

      <section 
        className="w-full h-[175px] px-20 flex items-center justify-between 
        gap-5 mt-[80px] max-lg:px-7 max-lg:gap-7 max-md:hidden">
          <button 
              className="w-[250px] h-[42px] flex items-center justify-center
              rounded-[10px] bg-[#3d3d3d] cursor-pointer hover:bg-[#e33b41]"
                onClick={() => navigate('/catalogs/special_offer')}>
              <p className="text-white text-[17px]
               font-[500] uppercase">
                  {t("allproducts")}
              </p>
          </button>

          <form 
              className="w-[81%] h-[42px] flex gap-2 items-center max-lg:gap-3" 
              onSubmit={(evt) => {
                evt.preventDefault()
              }}>

              <input 
                  type="text" 
                  placeholder={t("search")}
                  className=" w-[100%] h-full border-1 border-[#e7e7e7ff] 
                  rounded-[10px] p-3 outline-none text-sm [body.dark_&]:text-white
                  [body.dark_&]:border-[#464646]"
                  maxLength={60}/>

              <button 
                  className="w-[41px] h-full bg-[#e33b41] flex items-center
                  justify-center rounded-[10px] cursor-pointer">
                  <img 
                      src="./Img/search-icon.svg" 
                      class="w-[15px] h-[15px]" 
                      alt=""/>
              </button>
          </form>
      </section>

      <SliderCategories isMobile={isMobile}/>

      <SliderOffers currentLang={currentLang}/>

      <AboutMenu />

      </main>
  );
}

export default Project;