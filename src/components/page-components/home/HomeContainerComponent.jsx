"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import BlackRobotImage from "@/app/images/robot-black.png";
import WhiteRobotImage from "@/app/images/robot-white.png";
import Link from "next/link";
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";
import { IoImage } from "react-icons/io5";
const HomeContainerComponent = () => {
  const { mode } = useSelector((state) => state.theme);
  const { lang } = useSelector((state) => state.lang);
  return (
    <div className="w-full min-h-[calc(100dvh-120px)] md:min-h-[calc(100dvh-65px)] flex flex-col gap-y-6 justify-center items-center">
      <div className="w-[85%] sm:w-[480px] xl:w-[1000px] flex flex-col gap-y-4">
        <div
          className="flex items-center gap-x-2"
          dir={lang === "en" ? "ltr" : "rtl"}
        >
          <Image
            alt="N-Ai Logo"
            src={mode === "light" ? BlackRobotImage : WhiteRobotImage}
            className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] transition-all duration-200"
          />
          <h1 className="text-[18px] sm:text-[24px] md:text-[30px] font-extrabold mt-3 transition-all duration-200">
            {lang === "en"
              ? "Welcome To N-Ai Assistant."
              : "به دستیار N-Ai خوش آمدید."}
          </h1>
        </div>
        <p
          className="font-semibold leading-7 md:leading-8 text-[13px] md:text-[17px] text-justify transition-all duration-200"
          dir={lang === "en" ? "ltr" : "rtl"}
        >
          {lang === "en"
            ? "Our web app lets you easily interact with AI, offering advanced features like natural language processing and data analysis ."
            : "وب اپلیکیشن ما به شما این امکان میدهد که براحتی با هوش مصنوعی ارتباط برقرار کرده و از امکانات پیشرفته مانند پردازش زبان طبیعی و تحلیل داده‌ها بهره مند شوید ."}
        </p>
      </div>
      <div
        className="flex flex-wrap justify-center gap-y-5 gap-x-8 w-full sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1300px]"
        dir={lang === "en" ? "ltr" : "rtl"}
      >
        <Link
          href="/text-ai"
          className="group w-[85%] sm:w-[480px] aspect-[4/1.8] rounded-[25px] relative"
        >
          <span
            className={`inset-0 bg-gradient-to-br from-blue-600 via-transparent rounded-[25px] dark:via-transparent to-blue-600 absolute`}
          ></span>
          <span
            className="text-slate-600 dark:text-slate-300 group-hover:bg-opacity-95 dark:group-hover:bg-opacity-85 transition-all duration-200 group-hover:text-slate-900 dark:group-hover:text-slate-50 flex flex-col justify-between items-center p-6 absolute inset-[2px] rounded-[23px] bg-white border border-slate-200 dark:border-gray-800 dark:bg-slate-900"
            dir={lang === "en" ? "ltr" : "rtl"}
          >
            <span className="w-full h-fit sm:h-[40%] flex justify-center items-center">
              <HiMiniChatBubbleBottomCenterText className="text-[20px] sm:text-[32px]" />
            </span>
            <span className="w-full h-fit font-semibold text-[12px] md:text-[16px] md:leading-7 text-center">
              {lang === "en"
                ? "Engage in real-time conversations with AI and get intelligent, instant answers to your questions anytime ."
                : "با امکان گفتگوی آنلاین با هوش مصنوعی، پاسخ‌های هوشمند و سریع به سوالات خود را در هر زمان دریافت کنید ."}
            </span>
          </span>
        </Link>
        <Link
          href="/image-ai"
          className="group w-[85%] sm:w-[480px] aspect-[4/1.8] rounded-[25px] relative"
        >
          <span
            className={`inset-0 bg-gradient-to-br from-red-600 via-transparent rounded-[25px] dark:via-transparent to-red-600 absolute`}
          ></span>
          <span className="text-slate-600 dark:text-slate-300 group-hover:bg-opacity-95 dark:group-hover:bg-opacity-85 transition-all duration-200 group-hover:text-slate-900 dark:group-hover:text-slate-50 flex flex-col justify-between items-center p-6 absolute inset-[2px] rounded-[23px] bg-white border border-slate-200 dark:border-gray-800 dark:bg-slate-900">
            <span className="w-full h-fit sm:h-[40%] flex justify-center items-center">
              <IoImage className="text-[20px] sm:text-[32px]" />
            </span>
            <span className="w-full h-fit font-semibold text-[12px] md:text-[16px] md:leading-7 text-center">
              {lang === "en"
                ? "Create unique and creative images effortlessly with our AI-powered image generation feature ."
                : "با قابلیت تولید تصاویر هوشمند، به راحتی تصاویری خاص و خلاقانه مطابق با نیاز خود بسازید ."}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomeContainerComponent;
