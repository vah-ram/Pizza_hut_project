import AllCatalogs from "../AllCatalogs/AllCatalogs";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getProductByIdHost } from "../utils/Hosts";

export default function CatalogProductCard({ isMobile, currentUser }) {
  const navigate = useNavigate();

  const [basketInt, setBasketInt] = useState(1);
  const [viewImage, setViewImage] = useState(null);

  const { catalogId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const callFunc = async () => {
      const res = await axios.get(getProductByIdHost, {
        params: { productId: catalogId },
      });

      if (res.data) {
        setProduct(res.data.product);
      }
    };
    callFunc();
  }, [catalogId]);

  useEffect(() => {
    const pizzaTypes = document.querySelectorAll(".pizza_types .typePizza");

    pizzaTypes.forEach((item) => {
      item.addEventListener("click", () => {
        pizzaTypes.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
      });
    });
  }, []);

  return (
    <>
      <AllCatalogs isMobile={isMobile} currentUser={currentUser} />

      {viewImage ? (
        <div
          className="fixed inset-0 z-[150] bg-black/95 flex
            items-center justify-center max-md:hidden 
            p-[15px]"
        >
          <img
            src={product?.image_url}
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
        className="fixed inset-0 z-[120] bg-black/40 flex
            items-center justify-center max-md:hidden"
      >
        <div className="relative w-[80%] h-auto">
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
            className="relative w-full h-full
                      rounded-xl bg-[#FFF] p-5 pb-5 overflow-scroll
                      [&::-webkit-scrollbar]:hidden [body.dark_&]:bg-[#2E2E2E]"
          >
            <div className="w-full flex">
              <div className="w-[40%] h-auto group overflow-hidden">
                <span
                  className={`imgSpan relative flex w-[30vw] h-[30vw] 
                    rounded-xl cursor-pointer justify-center items-center 
                    bg-[url('${product?.image_url}')] 
                    bg-cover hover:opacity-75`}
                  onClick={() => setViewImage(true)}
                >
                  <img
                    src="https://www.pizza-hut.am/assets/images/app_2/zoom.svg"
                    className="w-[2vw] h-[2vw] hidden relative
                     [.imgSpan:hover_&]:block"
                    alt=""
                  />

                  <div
                    className={`absolute top-10 left-2 bg-red-500 text-white text-sm  
                            px-3 py-1 rounded-r-md flex justify-center items-center w-[80px] 
                            flex ${product?.sale_percent === 0 ? "hidden" : ""}`}
                  >
                    -{product?.sale_percent === 0 ? "" : product?.sale_percent}%
                  </div>
                </span>
              </div>

              <div className="w-[60%] h-full flex flex-col">
                <div className="w-full flex justify-between">
                  <h2
                    className="uppercase text-[calc(18px+.3vw)]
                                  text-[#515151] font-[700] mt-2 [body.dark_&]:text-white"
                  >
                    {product?.title}
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
                  className={`text-[20px] text-[#9D9D9D]
                              font-[600] mt-3 
                              ${product?.sale_percent === 0 ? "hidden" : ""}`}
                >
                  -{product?.sale_percent}%
                </p>

                <p
                  className="mt-5 text-[18px] text-[#9D9D9D]
                          font-[400]"
                >
                  {product?.description}
                </p>

                <h3
                  className="uppercase text-[calc(16px+.3vw)] font-[600]
                              text-[#515151] mt-20 [body.dark_&]:text-white"
                >
                  Pizza Type
                </h3>

                <div className="flex gap-2 mt-3 pizza_types">
                  <button
                    className="uppercase px-[15px] py-[5px] 
                                  text-[#9D9D9D] border border-1
                                  border-gray-200 rounded-md text-[14px]
                                  cursor-pointer [body.dark_&]:border-[#9D9D9D] 
                                  typePizza [.active]:bg-[#e33b41] [.active]:text-white 
                                  active"
                  >
                    Pan
                  </button>

                  <button
                    className="uppercase px-[15px] py-[5px] 
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

                  <div className="w-full flex justify-between mt-20">
                    <span className="flex gap-2 items-center">
                      <p
                        className={`text-[#e33b41] text-[25px] font-[500]
                                      font-sans leading-[15px] 
                                      ${product?.old_price === 0
                                          ? "text-gray-600 font-[400]"
                                          : ''
                                      }`}
                      >
                        {product?.price.toLocaleString()}
                      </p>

                      <p
                        className="text-[#9d9d9d] text-[23px]
                                      line-through"
                      >
                        {product?.old_price === 0
                          ? ""
                          : product?.old_price.toLocaleString()}
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
                        onClick={() => navigate("/basket")}
                      >
                        <img
                          src="	https://pizza-hut.am/assets/images/app_2/basketWhite.svg"
                          className="w-[22px] h-[30px]"
                          alt=""
                        />

                        <p className="text-white text-[16px]">ADD</p>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
