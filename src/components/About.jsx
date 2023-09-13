import "./Styles.css";
import React, { useEffect } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import pic1 from "../assets/chairman.jpg";

import HomeEn from '../locales/Ho_en.json'
import HomeHi from '../locales/Ho_hi.json'
import HomeBe from '../locales/Ho_be.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: HomeEn,
    },
    hi: {
      translation: HomeHi,
    },
    be: {
      translation: HomeBe,
    },
  },

  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});


const About = () => {
  const { t } = useTranslation();

  useEffect(() => {

    let currentLang = localStorage.getItem('langu');
    i18n.changeLanguage(currentLang);
  }, [])
  return (
    <>
      <div className="about">
        <div className="language">
          <h1 className="heading">
            About the <span>Chairman</span>
          </h1>
        </div>

        <div className="slider-container">
          <div className="swiper-slide slide">
            <p>{t("abt")}</p>
            <div className="user">
              <img src={pic1} alt="" />
              <div className="user-info">
                <h3>John Deo</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
