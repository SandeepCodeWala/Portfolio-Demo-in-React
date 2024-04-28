import { useContext } from "react";
import Switch from "react-switch";
// import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { ThemeContext, ThemeContextInterface } from "../../contexts/ThemeContext";
import logo from '../../images/logo.png';

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(
    ThemeContext,
  ) as ThemeContextInterface;

  const { t } = useTranslation();

  

  return (
    <>
      <header style={{ backgroundColor:'#b1b1b1'}} className="h-[650px] w-[100%]  dark:bg-[#000]">
        <div className="flex h-full flex-col items-center justify-center gap-5">
          <div>
          <img
              src={logo}
              alt="Profile"
              height="350px"
              width="350px"
              className="w-[300px]"
            />
          </div>

          <h1 className="text-6xl text-center font-bold text-gray-dark dark:text-white">
            {t("basic_info.name")}
          </h1>

          <TypeAnimation
            sequence={t("basic_info.titles", { returnObjects: true }).flatMap(
              (title: string) => [title, 2000],
            )}
            wrapper="span"
            speed={30}
            className="text-regular text-2xl text-gray-dark dark:text-white"
            repeat={Infinity}
          />
           <p
                style={{ fontSize: "16px" }}
                className="font-bold dark:text-white"
              >
                {"Email:- tsandy2210@gmail.com"}
              </p>
              <p
                style={{ fontSize: "16px",marginTop:-15 }}
                className="mt-1 font-bold dark:text-white"
              >
                {"Contact Number:- +91-8533079368"}
              </p>
 {/* <div className="flex justify-center gap-5">
        {t("basic_info.socials", { returnObjects: true }).map((social) => (
          <a key={social.icon} href={social.url}>
            <Icon icon={social.icon} width="30px" />
          </a>
        ))}
      </div> */}
          <Switch
            checked={darkTheme}
            onChange={toggleTheme}
            offColor="#baaa80"
            onColor="#353535"
            className="react-switch mx-auto"
            width={90}
            height={40}
            uncheckedIcon={
              <Icon
                className="ml-5 h-full text-end text-[25px] text-gray-dark"
                icon="twemoji:owl"
              />
            }
            checkedIcon={
              <Icon
                className="ml-5 h-full text-end text-[25px] text-gray-dark"
                icon="noto-v1:sun-with-face"
              />
            }
          />
        </div>
      </header>

      {/* <div className="flex justify-center gap-5 bg-yellow pb-2.5 pt-20 dark:bg-[#494949]">
        <Icon
          className={clsx(
            "h-full cursor-pointer text-[50px] text-gray-dark ",
            i18n.language === "en" && "brightness-50",
          )}
          icon="twemoji-flag-for-flag-united-kingdom"
          onClick={() => i18n.changeLanguage("en")}
        />
        <Icon
          className={clsx(
            "h-full cursor-pointer text-[50px] text-gray-dark ",
            i18n.language === "pl" && "brightness-50",
          )}
          icon="twemoji-flag-for-flag-poland"
          onClick={() => i18n.changeLanguage("pl")}
        />
      </div> */}
    </>
  );
};

export default Header;
