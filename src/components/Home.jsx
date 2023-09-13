import "./Styles.css";
import React, {useEffect} from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import collegPic from "../assets/ideogram.jpeg";
import HomeEn from '../locales/Ho_en.json'
import HomeHi from '../locales/Ho_hi.json'
import HomeBe from '../locales/Ho_be.json'

// import jo_HI from "../locales/john_hi.json";
// import jo_EN from "../locales/john_en.json";
// import jo_BE from "../locales/john_be.json";

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
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  },
});

const changeLang = (m) => {
	return() => {
		i18n.changeLanguage(m);

		localStorage.setItem('lang', m);
	}
}


const Home = () => {

	const {t} = useTranslation();

	useEffect(() => {

		let currentLang = localStorage.getItem('lang');
		i18n.changeLanguage(currentLang);
	}, [])


  return (
    <>
      <div className="language">
        <div className="college_info">
          <h1 className="college_head">𝐎𝐥𝐜𝐨𝐧𝐬 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲</h1>
        </div>
        <div className="language_buttons">
          <button onClick={changeLang("en")}>English</button>
          <button onClick={changeLang("hi")}>Hindi</button>
          <button onClick={changeLang("be")}>Bengali</button>
        </div>
      </div>

      <div className="about">
        <div className="image">
          <img id="collegeImage" src={collegPic} alt="" />
        </div>

        <div className="content">
          <p id="collegeDescription">{t("olk")}</p>
        </div>
      </div>

      <div className="container">
        <button className="btn" id="contactButton">
          Contact Us
        </button>
      </div>
    </>
  );
};
export default Home;
