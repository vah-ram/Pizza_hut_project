import {
    MdLocationOn,
    MdAccessTime,
    MdPhone,
    MdLanguage,
    MdEmail
} from "react-icons/md";
import {
    FaWifi,
    FaParking,
    FaCarSide,
    FaCcMastercard,
    FaCcVisa
} from "react-icons/fa";
import AboutMenu from "../AboutMenu/AboutMenu";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

export default function AboutUs() {
        return (

            <>

                <HeaderMenu />

                <img
                    className="w-full h-[100vh] bg-[url('https://bonee.blob.core.windows.net/images/7339654b-13cf-1d41-7128-9a075997cecb_3.webp')]
                bg-cover"/>

                <div className="w-full px-5 py-10 max-w-7xl mx-auto">

                    {/* Title */}
                    <h1 className="text-2xl font-semibold mb-6">
                        Pizza Hut Armenia Menu
                    </h1>

                    {/* Description */}
                    <p className="mb-4">
                        In 1958 brothers Frank and Dan Carney decided to open a large pizza restaurant in Wichita (Kansas).
                        When one of their friends offered them to open a rather rare restaurant at that time, they thought
                        that the idea could bring them success and borrowed $600 from their mother to start the business with
                        their partner, John Bender. Carney brothers and John Bender rented a small building and obtained the
                        equipment needed for cooking pizzas and opened the first Pizza Hut restaurant at 503 South Bluff street
                        in the center of Wichita. On the opening day, they offered free pizzas to people in order to get the
                        interest of the community. The small restaurant was meant for 25 people and looked like a hut ... this is
                        how the concept of "Pizza Hut" was born.
                    </p>

                    <p className="mb-4">
                        A year later, in 1959, Pizza Hut was registered in Kansas City and Dick Hassur opened the first licensed
                        restaurant in Topeka (Kansas). Fifteen years later, the first Pizza Hut opened in the United Kingdom and
                        since then Pizza Hut became the largest pizza producing company in the world.
                    </p>

                    <p className="mb-4">
                        Pizza Hut controls over 11,000 pizza restaurants and delivery points in 90 countries around the world.
                    </p>

                    <p className="mb-8">
                        Currently, there are 7 restaurants operating in Yerevan.
                    </p>

                    {/* 2 Column Layout */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* LEFT COLUMN */}
                        <div>
                            {/* Location */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <MdLocationOn className="text-xl text-red-600" />
                                    <h2 className="font-semibold">LOCATION</h2>
                                </div>

                                <div className="text-red-600 space-y-1">
                                    <p>8 Vahram Papazyan St, Yerevan 0012, Armenia</p>
                                    <p>15 Tigran Mets Ave, Yerevan 0010, Armenia</p>
                                    <p>17, 1 Erebuni St, Yerevan, Armenia</p>
                                    <p>Yerevan Mall Food court, Arshakunyats Avenue, Yerevan, Armenia</p>
                                    <p>MEGA MALL ARMENIA, Gai Avenue, Yerevan, Armenia</p>
                                    <p>1 Hyusisayin poghota, Yerevan, Armenia</p>
                                    <p>5 Mesrop Mashtoc pokhota, Yerevan 0015, Armenia</p>
                                    <p>5 Komitas Ave, Yerevan, Armenia</p>
                                </div>
                            </div>

                            {/* Phones */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <MdPhone className="text-xl text-red-600" />
                                    <h2 className="font-semibold">PHONES</h2>
                                </div>
                                <p>060505505</p>
                            </div>

                            {/* Website */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <MdLanguage className="text-xl text-red-600" />
                                    <h2 className="font-semibold">WEB SITE</h2>
                                </div>
                                <a
                                    href="https://pizza-hut.am/"
                                    className="text-red-600 hover:underline"
                                >
                                    https://pizza-hut.am/
                                </a>
                            </div>

                            {/* Email */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <MdEmail className="text-xl text-red-600" />
                                    <h2 className="font-semibold">EMAIL</h2>
                                </div>
                                <p>delivery@derjavas.am</p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div>
                            {/* Working Hours */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <MdAccessTime className="text-xl text-red-600" />
                                    <h2 className="font-semibold">WORKING DAYS AND TIMES</h2>
                                </div>

                                <div className="flex flex-col gap-1">
                                    {[
                                        "Sunday",
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday"
                                    ].map((day) => (
                                        <div key={day} className="flex justify-between w-full">
                                            <span>{day}</span>
                                            <span className="text-gray-700">10:00 - 23:00</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Facility Features */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <FaWifi className="text-xl text-red-600" />
                                    <h2 className="font-semibold">FACILITY FEATURES</h2>
                                </div>

                                <div className="flex items-center gap-4 text-red-600 text-xl">
                                    <FaWifi />
                                    <FaParking />
                                    <FaCarSide />
                                    <FaCcVisa />
                                    <FaCcMastercard />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <AboutMenu />
            </>
    );
}
