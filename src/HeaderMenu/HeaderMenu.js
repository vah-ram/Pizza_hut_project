import { useNavigate } from "react-router-dom";

function HeaderMenu({ isMobile, modeValue, callDarkAndLightMode }) {
    const navigate = useNavigate();

    return (
        <>
            <header 
              className="w-full h-[80px] flex items-center justify-between px-20 fixed
               top-0 bg-[#FFF] z-[10] duration-300 max-lg:px-7 max-md:shadow-md max-md:h-[60px]">
              <div className="w-auto h-full flex gap-2 items-center">
                  <img 
                      src="./Img/pizza-hut-logo.png" 
                      className="w-[40px] h-[40px]" 
                      alt="pizza hut logo"/>
    
                  <div className="flex-col gap-[-10px]">
                      <p className="text-[15px] text-[#9d9d9d] font-[700] leading-[19px]">
                          Welcome to
                      </p>
    
                      <h2 className="text-[19px] text-[#e33b41] font-[600] leading-[19px] max-lg:text-[17px]">
                          Pizza Hut Armenia {isMobile ? "..." : "Menu"}
                      </h2>
                  </div>
              </div>
            
              <button 
                  className="w-[130px] h-[36px] bg-[#e33b41] rounded-[4px] flex justify-center items-center gap-2 text-[14px] font-sans-serif text-white cursor-pointer  max-md:hidden">
                  
                  <img 
                      src="./Img/moped.png" 
                      className="w-[20px] h-[20px]"
                      alt=""/>
    
                  <p className="text-[15px] font-sans max-lg:text-[13px]">
                      DELIVERY
                  </p>
              </button>
    
              <div className="w-auto h-full flex items-center gap-4 max-md:gap-3">
                  <button 
                    className={
                      `w-[60px] h-[26px] flex ${modeValue ? "flex-row-reverse" : "flex-row"} items-center gap-[3px] rounded-full border-1 border-[#e7e7e7ff] px-[3px] cursor-pointer max-md:hidden`
                    }
                    onClick={callDarkAndLightMode}>
                      <span 
                        className="w-[21px] h-[21px] shrink-0 block 
                        rounded-full bg-[#e33b41]"/>
            
                      <p className="text-[9px] font-[700] text-[#9d9d9d] leading-[10px]">
                          {modeValue ? "Dark Mode" : "Light Mode"}
                      </p>
                  </button>
    
                  <button className="w-auto h-auto cursor-pointer max-md:hidden">
                      <img 
                          src="./Img/usa.png" 
                          className="w-[30px] h-[18px]"
                          alt=""/>
                  </button>
    
                  <button 
                        className="w-auto h-auto cursor-pointer max-md:hidden"
                        onClick={() => navigate('/signIn')}>
                      <img 
                          src="./Img/user-icon.svg" 
                          className="w-[22px] h-[22px]"
                          alt=""/>
                  </button>
    
                  <button className="w-auto h-auto cursor-pointer relative after:content-['0'] after:absolute after:right-[-5px] after:top-[-5px] after:w-[20px] after:h-[20px] after:rounded-full after:bg-[#e33b41] after:flex after:justify-center after:items-center after:text-white max-md:hidden">
                      <img 
                          src="./Img/store-icon.svg" 
                          className="w-[25px] h-[25px]"
                          alt=""/>
                  </button>

                  <button className="hidden w-[40px] h-[40px] items-center justify-center cursor-pointer rounded-xl bg-white border border-1 border-gray-200 max-md:flex">
                      <img 
                          src="./Img/usa.png" 
                          className="w-[27px] h-[16px]"
                          alt=""/>
                  </button>

                  <button className="hidden w-[40px] h-[40px] items-center justify-center cursor-pointer rounded-xl bg-[#e33b41] max-md:flex">
                    <img 
                        src="/Img/search-icon.svg"
                        className="w-[22px] h-[22px]"/>
                  </button>

                  <button className="hidden w-[40px] h-[40px] items-center justify-center cursor-pointer rounded-xl bg-[#e33b41] max-md:flex">
                    <img 
                        src="https://www.pizza-hut.am/assets/images/app_2/burger-iconWhite.svg"
                        className="w-[22px] h-[22px]"/>
                  </button>
    
                  <button className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-md max-md:hidden">
                      <img 
                          src="./Img/menu-icon.svg" 
                          className="w-[22px] h-[22px]"
                          alt=""/>
                  </button>

              </div>

            </header>
        </>
    )
}

export default HeaderMenu;