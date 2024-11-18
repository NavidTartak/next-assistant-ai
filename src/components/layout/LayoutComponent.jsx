import React, { useEffect } from "react";
import Alert from "../common/Alert";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import BlackRobotImage from "@/app/images/robot-black.png";
import WhiteRobotImage from "@/app/images/robot-white.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome, GoHomeFill } from "react-icons/go";
import {
  HiMiniChatBubbleBottomCenterText,
  HiOutlineChatBubbleBottomCenterText,
} from "react-icons/hi2";
import { IoImage, IoImageOutline, IoMoonOutline } from "react-icons/io5";
import { setLang } from "@/redux/features/lang/langSlice";
import Switch from "../common/Switch";
import { setTheme } from "@/redux/features/theme/themeSlice";
import { IoMdMoon } from "react-icons/io";
import { MdOutlineWbSunny, MdSunny } from "react-icons/md";
const LayoutComponent = ({ children }) => {
  const { mode } = useSelector((state) => state.theme);
  const { lang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const changeLangHandler = (targetLang) => {
    if (lang !== targetLang) {
      dispatch(setLang(targetLang));
    }
  };
  const changeThemeHandler = (targetMode) => {
    if (mode !== targetMode) {
      dispatch(setTheme(targetMode));
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <>
      <Alert />
      <div
        className={`w-full min-h-[calc(100dvh)] text-slate-900 dark:text-slate-50`}
      >
        <div
          dir={lang === "en" ? "ltr" : "rtl"}
          className="transition-all duration-200 w-full h-[55px] md:h-[60px] bg-gray-50 dark:bg-gray-950 bg-opacity-70 dark:bg-opacity-60 backdrop-blur-md fixed shadow-sm dark:shadow-sm border-b dark:border-b border-gray-200 dark:border-gray-800 top-0 z-50 px-3 sm:px-8 md:px-[60px] lg:px-[70px] xl:px-[90px] select-none"
        >
          <div className="hidden w-full h-full md:flex justify-between items-center">
            <div className="flex justify-start items-center gap-x-5">
              <Image
                alt="N-Ai Logo"
                src={mode === "light" ? BlackRobotImage : WhiteRobotImage}
                className="w-[45px] h-[45px]"
              />
              <div className="flex justify-start items-center gap-x-5 mt-[10px]">
                <Link
                  href="/"
                  className={`dark:text-gray-50 flex items-center gap-x-1 transition-all duration-200 hover:font-bold ${
                    pathname === "/" && "font-bold"
                  }`}
                >
                  {pathname === "/" ? (
                    <GoHomeFill size={20} className="mb-2" />
                  ) : (
                    <GoHome size={20} className="mb-2" />
                  )}
                  <span>{lang === "fa" ? "خانه" : "Home"}</span>
                </Link>
                <Link
                  href="/text-ai"
                  className={`dark:text-gray-50 flex items-center gap-x-1 transition-all duration-200 hover:font-bold ${
                    pathname === "/text-ai" && "font-bold"
                  }`}
                >
                  {pathname === "/text-ai" ? (
                    <HiMiniChatBubbleBottomCenterText
                      size={20}
                      className="mb-1"
                    />
                  ) : (
                    <HiOutlineChatBubbleBottomCenterText
                      size={20}
                      className="mb-1"
                    />
                  )}
                  <span>{lang === "fa" ? "دستیار گفتگو" : "Text Ai"}</span>
                </Link>
                <Link
                  href="/image-ai"
                  className={`dark:text-gray-50 flex items-center gap-x-1 transition-all duration-200 hover:font-bold ${
                    pathname === "/image-ai" && "font-bold"
                  }`}
                >
                  {pathname === "/image-ai" ? (
                    <IoImage size={20} className="mb-1" />
                  ) : (
                    <IoImageOutline size={20} className="mb-1" />
                  )}
                  <span>{lang === "fa" ? "دستیار تصویر" : "Image Ai"}</span>
                </Link>
                <Switch
                  className="mb-[6px] mx-2"
                  value={mode === "light"}
                  onChangeTrue={() => changeThemeHandler("light")}
                  onChangeFalse={() => changeThemeHandler("dark")}
                  falseLabel={
                    mode === "dark" ? (
                      <IoMdMoon
                        size={18}
                        className={
                          mode === "light" ? "text-slate-900" : "text-gray-50"
                        }
                      />
                    ) : (
                      <IoMoonOutline
                        size={18}
                        className={
                          mode === "light" ? "text-slate-900" : "text-gray-50"
                        }
                      />
                    )
                  }
                  trueLabel={
                    mode === "light" ? (
                      <MdSunny
                        size={18}
                        className={
                          mode === "light" ? "text-slate-900" : "text-gray-50"
                        }
                      />
                    ) : (
                      <MdOutlineWbSunny
                        size={18}
                        className={
                          mode === "light" ? "text-slate-900" : "text-gray-50"
                        }
                      />
                    )
                  }
                />
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-5">
              <div className="text-[14px] flex items-center gap-x-2">
                <button
                  onClick={() => changeLangHandler("en")}
                  className={`w-[24px] h-[24px] transition-all duration-200 flex justify-center items-center pt-1 rounded-[8px] dark:text-gray-50 ${
                    lang === "en"
                      ? "font bg-slate-900 dark:bg-slate-50 dark:text-slate-900 text-gray-50"
                      : "hover:bg-gray-200 dark:hover:bg-slate-700"
                  }`}
                >
                  En
                </button>
                <span className="mt-1 text-gray-400">|</span>
                <button
                  onClick={() => changeLangHandler("fa")}
                  className={`w-[24px] h-[24px] transition-all duration-200 flex justify-center items-center pt-1 rounded-[8px] dark:text-gray-50 ${
                    lang === "fa"
                      ? "font bg-slate-900 dark:bg-gray-50 dark:text-slate-900 text-gray-50"
                      : "hover:bg-gray-200 dark:hover:bg-slate-700"
                  }`}
                >
                  فا
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex md:hidden w-full h-full justify-between items-center"
            dir="ltr"
          >
            <div className="w-[calc(50%-18px)]">
              <div className="text-[14px] flex items-center gap-x-2">
                <button
                  onClick={() => changeLangHandler("en")}
                  className={`w-[24px] h-[24px] transition-all duration-200 flex justify-center items-center pt-1 rounded-[8px] dark:text-gray-50 ${
                    lang === "en"
                      ? "font bg-slate-900 dark:bg-slate-50 dark:text-slate-900 text-gray-50"
                      : "hover:bg-gray-200 dark:hover:bg-slate-700"
                  }`}
                >
                  En
                </button>
                <span className="mt-1 text-gray-400">|</span>
                <button
                  onClick={() => changeLangHandler("fa")}
                  className={`w-[24px] h-[24px] transition-all duration-200 flex justify-center items-center pt-1 rounded-[8px] dark:text-gray-50 ${
                    lang === "fa"
                      ? "font bg-slate-900 dark:bg-gray-50 dark:text-slate-900 text-gray-50"
                      : "hover:bg-gray-200 dark:hover:bg-slate-700"
                  }`}
                >
                  فا
                </button>
              </div>
            </div>
            <Image
              alt="N-Ai Logo"
              src={mode === "light" ? BlackRobotImage : WhiteRobotImage}
              className="w-[35px] h-[35px]"
            />
            <div className="w-[calc(50%-18px)] flex justify-end">
              <Switch
                value={mode === "light"}
                onChangeTrue={() => changeThemeHandler("light")}
                onChangeFalse={() => changeThemeHandler("dark")}
                falseLabel={
                  mode === "dark" ? (
                    <IoMdMoon
                      size={18}
                      className={
                        mode === "light" ? "text-slate-900" : "text-gray-50"
                      }
                    />
                  ) : (
                    <IoMoonOutline
                      size={18}
                      className={
                        mode === "light" ? "text-slate-900" : "text-gray-50"
                      }
                    />
                  )
                }
                trueLabel={
                  mode === "light" ? (
                    <MdSunny
                      size={18}
                      className={
                        mode === "light" ? "text-slate-900" : "text-gray-50"
                      }
                    />
                  ) : (
                    <MdOutlineWbSunny
                      size={18}
                      className={
                        mode === "light" ? "text-slate-900" : "text-gray-50"
                      }
                    />
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full min-h-[calc(100dvh)] pt-[60px] md:pt-[65px] pb-[60px] md:pb-0 px-1 sm:px-8 md:px-[60px] lg:px-[70px] xl:px-[90px]">
          {children}
        </div>
        <div
          dir="ltr"
          className="md:hidden transition-all duration-200 w-full h-[55px] bg-gray-50 dark:bg-gray-950 bg-opacity-70 dark:bg-opacity-60 backdrop-blur-md fixed border-t dark:border-b border-gray-200 dark:border-gray-800 bottom-0 z-50 px-12 sm:px-16 select-none"
          style={{ boxShadow: "0px -2px 10px rgba(0,0,0,0.05)" }}
        >
          <div className="w-full h-full flex justify-between items-center">
            <Link
              href="/image-ai"
              className={`dark:text-gray-50 flex items-center gap-x-1 transition-all duration-200 hover:font-bold ${
                pathname === "/image-ai" && "font-bold"
              }`}
            >
              {pathname === "/image-ai" ? (
                <IoImage size={22} />
              ) : (
                <IoImageOutline size={22} />
              )}
            </Link>
            <Link
              href="/text-ai"
              className={`dark:text-gray-50 flex items-center gap-x-1 transition-all duration-200 hover:font-bold ${
                pathname === "/text-ai" && "font-bold"
              }`}
            >
              {pathname === "/text-ai" ? (
                <HiMiniChatBubbleBottomCenterText size={22} />
              ) : (
                <HiOutlineChatBubbleBottomCenterText size={22} />
              )}
            </Link>
            <Link
              href="/"
              className={`dark:text-gray-50 flex items-center gap-x-1 transition-all duration-200 hover:font-bold ${
                pathname === "/" && "font-bold"
              }`}
            >
              {pathname === "/" ? (
                <GoHomeFill size={22} />
              ) : (
                <GoHome size={22} />
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutComponent;
