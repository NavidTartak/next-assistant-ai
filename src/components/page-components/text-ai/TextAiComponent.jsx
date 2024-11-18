"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { onChangeHandler_MultiSpace } from "@/core/utilities/InputOnchangeHandler.ts";
import { useFormik } from "formik";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { RiAttachment2 } from "react-icons/ri";
const TextAiComponent = () => {
  const { lang } = useSelector((state) => state.lang);
  const [loading, setLoading] = useState(false);
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
      <div className="w-full flex-grow border border-red-600">1</div>
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
