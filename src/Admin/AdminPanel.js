import React, {useEffect, useState} from "react";
import axios from "axios";
import {verifyProfileHost} from "../utils/Hosts";
import { useNavigate } from "react-router-dom"

function AdminPanel () {
    const navigate = useNavigate();

    const [ randomId, setRandomId ] = useState(null);

    useEffect(() => {

        const callBackFunc = async() => {
            try {
                if(localStorage.getItem("token")) {

                    const res = await axios.get(verifyProfileHost, {
                        params: { token: localStorage.getItem("token") }
                    });

                    if(res.data.user.role === "User") {
                        navigate('/')
                    }

                } else {
                    return;
                };
            } catch(err) {
                console.error(err);
            }
        };

        callBackFunc();
    }, []);

    const getNumericCode = () => {
        setRandomId(Math.floor(100000 + Math.random() * 900000).toString());
    };

    const addData = async() => {

    }

    return (
        <>
            <div className="w-full h-full flex justify-cente items-center">
                <form
                    className="w-[40rem] h-[80%] p-5 flex flex-col gap-20
                     items-center"
                    onSubmit={(e) => {
                        e.preventDefault()
                        addData()
                    }}>
                    <input type="text"/>

                    <input type="text"/>

                    <input type="text"/>

                    <input type="text"/>

                    <input type="text"/>
                </form>
            </div>
        </>
    )
};

export default AdminPanel;