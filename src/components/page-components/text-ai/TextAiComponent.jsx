"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { onChangeHandler_MultiSpace } from "@/core/utilities/InputOnchangeHandler.ts";
import { useFormik } from "formik";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { RiAttachment2 } from "react-icons/ri";
import BlackRobotImage from "@/app/images/robot-black.png";
import WhiteRobotImage from "@/app/images/robot-white.png";
import Image from "next/image";
const TextAiComponent = () => {
  const { lang } = useSelector((state) => state.lang);
  const { mode } = useSelector((state) => state.theme);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const formik = useFormik({
    initialValues: {
      text: "",
      file: null,
    },
    onSubmit: async (values, { resetForm }) => {
      if (values && (values.text || values.file)) {
        console.log(values);
        resetForm();
      }
    },
  });
  return (
    <div className="w-full h-[calc(100dvh-120px)] md:h-[calc(100dvh-65px)] flex flex-col gap-y-2 md:gap-y-3 justify-center items-center py-0 md:py-4">
      <div className="w-full flex-grow overflow-x-auto">
        <div className="w-full flex flex-col gap-y-3">
          {[
            {
              fromAi: true,
              text:
                lang === "en"
                  ? "What can I help with?"
                  : "سلام! چطور می‌توانم به شما کمک کنم؟",
            },
            ...messages,
          ].map((item, index) => {
            return (
              <div
                key={index}
                className={`w-full flex items-start ${
                  item.fromAi ? "justify-start gap-x-2" : "justify-end"
                }`}
              >
                {item.fromAi && (
                  <div className="w-[32px] md:w-[40px] h-[32px] md:h-[40px] rounded-full bg-white dark:bg-slate-700 flex justify-center items-center shadow-md">
                    <Image
                      alt="N-Ai Logo"
                      src={mode === "light" ? BlackRobotImage : WhiteRobotImage}
                      className="w-[22px] md:w-[32px] h-[22px] md:h-[32px] transition-all duration-200"
                    />
                  </div>
                )}
                <div
                  className={`md:text-[14px] text-[13px] min-h-[32px] md:min-h-[40px] md:leading-6 ${
                    item.fromAi
                      ? "max-w-[calc(100%-30px)] md:max-w-[calc(100%-40px)]"
                      : "max-w-[calc(100%-38px)] md:max-w-[calc(100%-48px)]"
                  } border ${
                    item.fromAi
                      ? "border-gray-200 bg-white shadow-sm text-slate-950 dark:bg-slate-700 dark:border-slate-700 dark:text-gray-50"
                      : "border-gray-950 bg-gray-950 text-gray-50"
                  } rounded-[11px] py-2 px-4`}
                  dir={lang === "en" ? "ltr" : "rtl"}
                >
                  {item.text}
                </div>
              </div>
            );
          })}
          {loading && (
            <div className="flex justify-center items-center py-1">
              <div className="w-[32px] md:w-[40px] h-[32px] md:h-[40px] rounded-full bg-white dark:bg-slate-700 flex justify-center items-center shadow-md animate-pulse">
                <Image
                  alt="N-Ai Logo"
                  src={mode === "light" ? BlackRobotImage : WhiteRobotImage}
                  className="w-[22px] md:w-[32px] h-[22px] md:h-[32px] transition-all duration-200"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div
          className="flex justify-between items-start w-full"
          dir={lang === "en" ? "ltr" : "rtl"}
        >
          <Input
            placeholder={
              lang === "en" ? "Please type here ..." : "لطفا اینجا بنویسید ..."
            }
            width="w-[calc(100%-34px)] md:w-[calc(100%-36px)]"
            value={formik.values.text}
            onChange={(e) =>
              onChangeHandler_MultiSpace(
                e,
                formik.handleChange,
                formik.values.text,
                5000,
                true
              )
            }
            name="text"
            rows={3}
            withoutLabel
            withoutErrorText
            dir={lang === "en" ? "ltr" : "rtl"}
          />
          <div className="w-[30px] md:w-[32px] flex flex-col justify-start gap-y-1.5 items-center">
            <Button
              disabled={loading || (!formik.values.text && !formik.values.file)}
              border="border dark:border-gray-200 border-gray-600"
              type="submit"
              rounded="rounded-full"
              bg="dark:bg-gray-50 bg-slate-900"
              color="dark:text-slate-800 text-slate-50"
              width="w-[30px] md:w-[32px] !shadow-none p-0"
              height="h-[30px] md:h-[32px]"
            >
              <IoIosSend className="text-[18px]" />
            </Button>
            <Button
              disabled={loading}
              border="border dark:border-gray-200 border-gray-600"
              type="button"
              rounded="rounded-full"
              bg="dark:bg-gray-50 bg-slate-900"
              color="dark:text-slate-800 text-slate-50"
              width="w-[30px] md:w-[32px] !shadow-none p-0"
              height="h-[30px] md:h-[32px]"
            >
              <RiAttachment2 className="text-[18px]" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TextAiComponent;
