import {
  MdLocationOn,
  MdAccessTime,
  MdPhone,
  MdLanguage,
  MdEmail,
} from "react-icons/md";
import {
  FaWifi,
  FaParking,
  FaCarSide,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa";
import AboutMenu from "../AboutMenu/AboutMenu";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import MobileMenu from "../MobileMenuBar/MobileMenu";
import { useTranslation } from "react-i18next";

export default function AboutUs({ isMobile, currentUser }) {
  const { t } = useTranslation();
  return (
    <>
      {!isMobile ? <HeaderMenu /> : ""}

      <MobileMenu currentUser={currentUser}/>

      <img
        className="w-full h-[100vh] bg-[url('https://bonee.blob.core.windows.net/images/7339654b-13cf-1d41-7128-9a075997cecb_3.webp')]
                bg-cover"
      />

      <div className="w-full py-10 max-w-7xl mx-auto [body.dark_&]:text-white">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-6">{t("aboutus_page_title")}</h1>

        {/* Description */}
        <p className="mb-4">
          {t("aboutus_p1")}
        </p>

        <p className="mb-4">
          {t("aboutus_p2")}
        </p>

        <p className="mb-4">
          {t("aboutus_p3")}
        </p>

        <p className="mb-8">
          {t("aboutus_p4")}
        </p>

        {/* 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT COLUMN */}
          <div>
            {/* Location */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <MdLocationOn className="text-xl text-red-600" />
                <h2 className="font-semibold">{t("location_title")}</h2>
              </div>

              <div className="text-red-600 space-y-1">
                <p>8 Vahram Papazyan St, Yerevan 0012, Armenia</p>
                <p>15 Tigran Mets Ave, Yerevan 0010, Armenia</p>
                <p>17, 1 Erebuni St, Yerevan, Armenia</p>
                <p>
                  Yerevan Mall Food court, Arshakunyats Avenue, Yerevan, Armenia
                </p>
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
                <h2 className="font-semibold">{t("phones_title")}</h2>
              </div>
              <p>060505505</p>
            </div>

            {/* Website */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <MdLanguage className="text-xl text-red-600" />
                <h2 className="font-semibold">{t("website_title")}</h2>
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
                <h2 className="font-semibold">{t("email_title")}</h2>
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
                <h2 className="font-semibold">{t("working_days_times_title")}</h2>
              </div>

              <div className="flex flex-col gap-1">
                {[ 
                t("sunday"),
                t("monday"),
                t("tuesday"),
                t("wednesday"),
                t("thursday"),
                t("friday"),
                t("saturday"),
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
                <h2 className="font-semibold">{t("facility_features_title")}</h2>
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
