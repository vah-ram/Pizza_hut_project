import React, { useEffect, useState } from "react";
import Project from "../Project";
import { useNavigate, useParams } from "react-router-dom";
import { getProductByIdHost, addProductToBasketHost } from "../utils/Hosts";
import axios from "axios";

function ProductCard({ isMobile, currentUser, currentLang }) {
  const navigate = useNavigate();

  const [basketInt, setBasketInt] = useState(1);
  const [viewImage, setViewImage] = useState(null);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const pizzaTypes = document.querySelectorAll(".pizza_types .typePizza");

    pizzaTypes.forEach((item, i) => {
      item.addEventListener("click", () => {
        pizzaTypes.forEach((prevs) => {
          prevs.classList.remove("active");
        });

        item.classList.add("active");
      });
    });
  }, []);

  useEffect(() => {
    const callFunc = async () => {
      const res = await axios.get(getProductByIdHost, {
        params: { productId: productId },
      });

      if (res.data) {
        setProduct(res.data.product);
      }
    };
    callFunc();
  }, [productId]);

  const addBasketFunc = async () => {
    if (!currentUser || !product) {
      return;
    }

    await axios.post(addProductToBasketHost, {
      myId: currentUser?.id,
      productId: product.id,
    });
  };

  return (
    <>
      <Project isMobile={isMobile} currentUser={currentUser} />

      {viewImage ? (
        <div
          className="fixed inset-0 z-[150] bg-black/95 flex
            items-center justify-center max-md:hidden 
            p-[15px]"
        >
          <img
            src="https://bonee.blob.core.windows.net/images/3cb64dce-f9bc-6b0a-dd0f-dc785729de67_2.webp"
            className="w-auto h-auto object-cover group-hover:opacity-80"
            alt="slider item img"
          />

          <button
            className="w-[40px] h-[40px] absolute right-[15px] 
                        top-[15px] flex items-center justify-center rounded-xl
                        absolute cursor-pointer border-1 border-[#ebebeb]"
            onClick={() => setViewImage(false)}
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/close.svg"
              className="w-[16px] h-[16px]"
            />
          </button>
        </div>
      ) : (
        ""
      )}

      <div
        className="fixed inset-0 z-[100] bg-black/40 flex
            items-center justify-center max-md:hidden"
      >
        <div className="relative w-[80%] h-[85%]">
          <button
            className="w-[30px] h-[30px] absolute right-0
                                  top-[-35px] flex items-center justify-center bg-white rounded-full
                                  absolute cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/close.svg"
              className="w-[12px] h-[12px]"
            />
          </button>

          <div
            className="w-full h-full 
                      rounded-xl bg-[#FFF] p-5 pb-20 overflow-scroll
                      [&::-webkit-scrollbar]:hidden [body.dark_&]:bg-[#2E2E2E]"
          >
            <div className="w-full flex gap-5">
              <div className="w-[40%] h-auto group overflow-hidden">
                <span
                  className={`relative flex w-[30vw] h-[30vw] 
                    cursor-pointer justify-center items-center 
                    bg-[url('${product?.image_url}')] 
                    bg-cover hover:opacity-75 
                    rounded-xl`}
                  onClick={() => setViewImage(true)}
                >
                  <img
                    src="https://www.pizza-hut.am/assets/images/app_2/zoom.svg"
                    className="w-[2vw] h-[2vw] hidden relative
                     [.imgSpan:hover_&]:block"
                    alt=""
                  />

                  <div
                    className="absolute top-10 left-2 bg-red-500 text-white text-sm  
                            px-3 py-1 rounded-r-md flex justify-center items-center w-[80px] 
                            flex "
                  >
                    -20%
                  </div>
                </span>
              </div>

              <div className="w-[60%] h-full px-5 flex flex-col">
                <div className="w-full flex justify-between">
                  <h2
                    className="uppercase text-[calc(18px+.3vw)]
                                  text-[#515151] font-[700] mt-2 [body.dark_&]:text-white"
                  >
                    {currentLang === "en"
                      ? product?.title
                      : currentLang === "ru"
                      ? product?.title_ru
                      : currentLang === "am"
                      ? product?.title_am
                      : ""}
                  </h2>

                  <button
                    className="w-[84px] h-[32px] flex gap-2 items-center
                                  justify-center border border-1
                                  border-[#e33b41] rounded-md cursor-pointer"
                  >
                    <img
                      src="/Img/share-icon.png"
                      className="w-[15px] h-[15px]"
                    />

                    <p
                      className="text-[16px] text-[#515151]
                                      [body.dark_&]:text-white"
                    >
                      Share
                    </p>
                  </button>
                </div>

                <p
                  className="text-[20px] text-[#9D9D9D]
                              font-[600] mt-3"
                >
                  -20%
                </p>

                <p
                  className="mt-5 text-[18px] text-[#9D9D9D]
                          font-[400]"
                >
                  {currentLang === "en"
                    ? product?.description
                    : currentLang === "ru"
                    ? product?.description_ru
                    : currentLang === "am"
                    ? product?.description_am
                    : ""}
                </p>

                <h3
                  className="uppercase text-[calc(16px+.3vw)] font-[600]
                              text-[#515151] mt-20 [body.dark_&]:text-white"
                >
                  Pizza Type
                </h3>

                <div className="flex gap-2 mt-3 pizza_types">
                  <button
                    className="uppercase w-[85px] h-[31px]
                                      text-[#9D9D9D] border border-1
                                      border-gray-200 rounded-md text-[14px]
                                      cursor-pointer [body.dark_&]:border-[#9D9D9D] 
                                      typePizza [.active]:bg-[#e33b41] [.active]:text-white 
                                      active"
                  >
                    Pan
                  </button>

                  <button
                    className="uppercase w-[85px] h-[31px]
                                      text-[#9D9D9D] border border-1
                                      border-gray-200 rounded-md text-[14px]
                                      cursor-pointer [body.dark_&]:border-[#9D9D9D] 
                                      typePizza [.active]:bg-[#e33b41] [.active]:text-white"
                  >
                    Classic
                  </button>
                </div>

                <form className="w-full flex flex-col">
                  <h3
                    className="uppercase text-[calc(12px+.3vw)] font-[600]
                              text-[#515151] mt-8 [body.dark_&]:text-white"
                  >
                    Add any special instructions
                  </h3>

                  <textarea
                    className="outline-none p-3 border
                                      border-1 border-[#9D9D9D] rounded-xl
                                      mt-3 [body.dark_&]:text-white"
                    placeholder="Additional Comment"
                  ></textarea>

                  <div className="w-full flex justify-between mt-8">
                    <span className="flex gap-2 items-center">
                      <p
                        className="text-[#e33b41] text-[25px] font-[500]
                                      font-sans leading-[15px]"
                      >
                        {product?.price.toLocaleString()}
                      </p>

                      <p
                        className="text-[#9d9d9d] text-[23px]
                                      line-through"
                      >
                        {product?.old_price.toLocaleString()}
                      </p>
                    </span>

                    <div className="flex items-center">
                      <div
                        className="flex gap-2 border-1 border-[#9d9d9d]
                                          rounded-tl-[10px] rounded-bl-[10px] w-[120px] h-[36px] text-[#e33b41] text-[20px]
                                          justify-around items-center translate-x-[3px] z-[0]"
                      >
                        <button
                          className="cursor-pointer"
                          onClick={(evt) => {
                            evt.preventDefault();
                            setBasketInt((prev) => Math.max(1, prev - 1));
                          }}
                        >
                          -
                        </button>

                        <p>{basketInt}</p>

                        <button
                          className="cursor-pointer"
                          onClick={(evt) => {
                            evt.preventDefault();
                            setBasketInt((prev) => prev + 1);
                          }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="w-[120px] h-[40px] cursor-pointer
                                          bg-[#e33b41] flex justify-center items-center
                                          gap-2 hover:opacity-90 rounded-lg z-[1]"
                        onClick={() => {
                          navigate("/basket")
                          addBasketFunc()
                        }}
                      >
                        <img
                          src="	https://pizza-hut.am/assets/images/app_2/basketWhite.svg"
                          className="w-[22px] h-[30px]"
                          alt=""
                        />

                        <p className="text-white text-[14px]">ADD</p>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full flex flex-col mt-5">
              <h2
                className="uppercase font-[600] text-[27px] text-[#515151]
                          [body.dark_&]:text-white"
              >
                Customers also orders
              </h2>

              <p className="text-[calc(12px+.3vw) text-[#9D9D9D]">
                We offer you various choice of similar products
              </p>

              <div className="flex gap-5 mt-10">
                <div
                  className="w-[25vw] h-[40vw] shrink-[0] flex flex-col
                                  justify-start [body.dark_&]:border-gray-100
                                  items-center relative rounded-[20px]
                                  border-1 border-gray-300"
                >
                  <span
                    className="w-full h-[80%] rounded-[20px]
                                  overflow-hidden border-b-1 border-gray-300 flex
                                  items-center justify-center shadow-sm"
                  >
                    <img
                      src="https://bonee.blob.core.windows.net/images/24b321ce-cfc4-b7c0-412a-68f1373d7338_1.webp"
                      className="hover:scale-110 duration-500"
                      alt="slider item img"
                    />
                  </span>

                  <div
                    className="w-full h-auto flex flex-col justify-center
                                      items-center mt-2"
                  >
                    <p
                      className="[body.dark_&]:text-white
                                          text-[#515151] font-[600]
                                          text-[calc(12px+.3vw)] uppercase"
                    >
                      Cheese
                    </p>

                    <p className="mr-auto ml-5 text-[#9D9D9D]">...</p>
                  </div>

                  <div
                    className="w-[90%] h-[44px] absolute bottom-[-22px]
                                          rounded-[10px] flex overflow-hidden"
                  >
                    <button className="w-[50%] cursor-pointer bg-[#3d3d3d]">
                      <p
                        className="text-white text-[17px] font-[500]
                                      font-sans leading-[15px] cursor-pointer"
                      >
                        150
                      </p>
                    </button>

                    <button
                      className="w-[50%] cursor-pointer bg-[#e33b41]
                                          flex justify-center
                                          items-center gap-2 hover:opacity-90"
                    >
                      <img
                        src="	https://pizza-hut.am/assets/images/app_2/basketWhite.svg"
                        className="w-[22px] h-[30px]"
                        alt=""
                      />

                      <p className="text-white text-[14px]">Add</p>
                    </button>
                  </div>
                </div>

                <div
                  className="w-[25vw] h-[40vw] shrink-[0] flex flex-col
                                      justify-start [body.dark_&]:border-gray-200
                                      items-center relative rounded-[20px]
                                      border-1 border-gray-300"
                >
                  <span
                    className="w-full h-[80%] rounded-[20px]
                                  overflow-hidden border-b-1 border-gray-300 flex
                                  items-center justify-center shadow-sm [body.dark_&]:border-gray-200"
                  >
                    <img
                      src="https://bonee.blob.core.windows.net/images/0a19d20a-3684-8267-c5fe-fb50a5026723_1.webp"
                      className="hover:scale-110 duration-500"
                      alt="slider item img"
                    />
                  </span>

                  <div
                    className="w-full h-auto flex flex-col justify-center
                                      items-center mt-2"
                  >
                    <p
                      className="[body.dark_&]:text-white
                                          text-[#515151] font-[600]
                                          text-[calc(12px+.3vw)] uppercase"
                    >
                      Coca Cola 0.5 l.
                    </p>

                    <p className="mr-auto ml-5 text-[#9D9D9D]">...</p>
                  </div>

                  <div
                    className="w-[90%] h-[44px] absolute bottom-[-22px]
                                  rounded-[10px] flex overflow-hidden"
                  >
                    <button className="w-[50%] cursor-pointer bg-[#3d3d3d]">
                      <p
                        className="text-white text-[17px] font-[500]
                                      font-sans leading-[15px] cursor-pointer"
                      >
                        500
                      </p>
                    </button>

                    <button
                      className="w-[50%] cursor-pointer bg-[#e33b41]
                                          flex justify-center
                                          items-center gap-2 hover:opacity-90">
                      <img
                        src="	https://pizza-hut.am/assets/images/app_2/basketWhite.svg"
                        className="w-[22px] h-[30px]"
                        alt=""
                      />

                      <p className="text-white text-[14px]">Add</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
