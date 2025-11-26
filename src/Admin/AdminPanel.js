import React, { useEffect, useState } from "react";
import axios from "axios";
import { verifyProfileHost, addProductHost } from "../utils/Hosts";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const navigate = useNavigate();

  const [randomId, setRandomId] = useState(null);

  useEffect(() => {
    const callBackFunc = async () => {
      try {
        if (localStorage.getItem("token")) {
          const res = await axios.get(verifyProfileHost, {
            params: { token: localStorage.getItem("token") },
          });

          if (res.data.user.role !== "Admin") {
            navigate("/");
          }
        } else {
          return;
        }
      } catch (err) {
        console.error(err);
      }
    };

    callBackFunc();
  }, []);

  const addData = async () => {
    // await axios.post(addProductHost ,{
    //   productName: 
    // });
  };

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center bg-[#2d2d2d] p-4">
       <form
          className="w-full max-w-lg bg-white/10 backdrop-blur-md shadow-lg shadow-black/30 
                    rounded-xl p-8 flex flex-col gap-5 border border-white/20 animate-fadeIn"
          onSubmit={(e) => {
            e.preventDefault();
            addData();
          }}
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-2 tracking-wide">
            Add Product
          </h2>

          <input
            type="text"
            placeholder="Product Name"
            className="input-style border-1 border-[#ebebeb] p-2 rounded-md text-white outline-none"
          />

          <input
            type="number"
            placeholder="Product Price"
            className="input-style border-1 border-[#ebebeb] p-2 rounded-md text-white outline-none"
            min={1}
          />

          <input
            type="text"
            placeholder="Product Img Link"
            className="input-style border-1 border-[#ebebeb] p-2 rounded-md text-white outline-none"
          />

          <input
            type="text"
            placeholder="Product sale"
            className="input-style border-1 border-[#ebebeb] p-2 rounded-md text-white outline-none"
          />

          <input
            type="text"
            placeholder="Product Type"
            className="input-style border-1 border-[#ebebeb] p-2 rounded-md text-white outline-none"
          />

          <button
            type="submit"
            className="mt-3 w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 
                      text-white rounded-lg font-semibold tracking-wide 
                      hover:opacity-90 transition-all"
          >
            Add Product
          </button>
        </form>
      </div>

    </>
  );
}

export default AdminPanel;
