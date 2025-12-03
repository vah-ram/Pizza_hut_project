import React from "react";
import { useTranslation } from "react-i18next";

function TermsConditions() {
  const { t } = useTranslation();
  return (
    <>
      <div className="body mx-auto w-[60%] pt-20 [body.dark_&]:text-white">
        <p className="title text-[20px]">
          <strong>{t("terms_title")}</strong>
        </p>
        <p className="mt-10">{t("terms_thanks")}</p>

        <p id="inf1" className="mt-20 text-[20px]">
          <strong className="heading_1">{t("privacy_title")}</strong>
        </p>
        <p className="mt-5">{t("privacy_p1")}</p>
        <p className="mt-5">{t("privacy_p2")}</p>

        <p id="inf2" className="mt-20 text-[20px]">
          <strong className="heading_1"> {t("food_ordering_title")}</strong>
        </p>

        <p className="mt-5"> {t("food_ordering_p1")}</p>

        <p id="inf3" className="mt-20 text-[20px]">
          <strong className="heading_1">{t("use_service_title")}</strong>
        </p>

        <p className="mt-5">{t("use_service_p1")}</p>
        <p className="mt-5">{t("use_service_p2")}</p>
        <p className="mt-5">{t("use_service_p3")}</p>

        <p id="inf4" className="mt-20 text-[20px]">
          <strong className="heading_1">{t("purchases_title")}</strong>
        </p>

        <p className="mt-5">{t("purchases_p1")}</p>
        <p className="mt-5">{t("purchases_p2")}</p>
        <p className="mt-5">{t("purchases_p3")}</p>
        <p className="mt-5">{t("purchases_p4")}</p>

        <p className="mt-5">{t("prices_title")}</p>
        <p className="mt-5">{t("prices_p")}</p>

        <p className="mt-5">{t("chargeback_title")}</p>
        <p className="mt-5">{t("chargeback_p")}</p>

        <p className="mt-5">{t("links_title")}</p>
        <p className="mt-5">{t("links_p1")}</p>
        <p className="mt-5">{t("links_p2")}</p>
      </div>
    </>
  );
}

export default TermsConditions;
