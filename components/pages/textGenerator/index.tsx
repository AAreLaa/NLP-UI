"use client";

import AnimationScreen from "@/components/atoms/animationScreen";
import TextBox from "@/components/atoms/textbox";
import ToolPageDescription from "@/components/molecules/toolPageDescription";
import React from "react";
import useTextGenerator from "./useTextGenerator";
import PopUpModal from "@/components/molecules/popUpModal";

export default function TextGeneratorPage() {
  const {
    text,
    setText,
    number,
    setNumber,
    showOutput,
    status,
    modalState,
    show,
  } = useTextGenerator();
  return (
    <section className="relative">
      <ToolPageDescription
        title="Text Generator"
        subTitle="Write Effectivly and Correctly with AI Models"
        description="Turn your ideas into engaging text that persuades your audience
              and tells your story the right way."
      />

      {/* box section */}
      <div
        className="relative bg-gray-900 mb-20 max-w-5xl mx-2 px-10 py-10 sm:px-10 lg:mx-auto text-gray-50 rounded-3xl border-2 border-green-600"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-green-800 to-yellow-800 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative text-lg text-white">
          Rewrite your existing text for multiple platforms in a single click.
          Create high-quality, engaging copy with tone and readability on track.
          Stick to 3-200 words for best results.
        </div>

        {/* text to generate option */}
        <div
          className="py-2 px-3 my-4 w-80 relative bg-transparent border border-green-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
          data-hs-input-number
        >
          <div className="w-full flex justify-between items-center gap-x-3">
            <div>
              <span className="block font-medium text-sm text-gray-50 dark:text-white">
                Number of texts to generate
              </span>
              <span className="block text-xs text-gray-400 dark:text-gray-400">
                Default value is 3.
              </span>
            </div>
            <div className="flex items-center gap-x-1.5">
              <button
                type="button"
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-input-number-decrement
                disabled={number == "1" || number.length==0}
                onClick={() => {
                  setNumber((parseInt(number) - 1).toString());
                }}
              >
                <svg
                  className="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </button>
              <input
                className="p-0 w-8 bg-transparent border-0 text-gray-50 text-center focus:ring-0 dark:text-white"
                type="text"
                maxLength={3}
                pattern="/^[0-9\b]+$/"
                value={number}
                inputMode="numeric"
                onChange={(e) => {
                  setNumber(e.target.value.replace(/\D/g, ""));
                  if (e.target.value == "0") {
                    setNumber("3");
                  }
                }}
                onBlur={()=>{if(number.length==0){setNumber("3")}}}
                data-hs-input-number-input
              />
              <button
                type="button"
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-input-number-increment
                disabled={number == "999" || number.length==0}
                onClick={() => {
                  setNumber((parseInt(number) + 1).toString());
                }}
              >
                <svg
                  className="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className="relative max-w-2xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 items-start md:max-w-none lg:max-w-none"
          data-aos-id-blocks
        >
          <TextBox label="Your Text" text={text} setText={setText} />
          <div className="relative text-center md:hidden">
            <button
              onClick={text.trim().length === 0 ? modalState : show}
              type="button"
              className="font-medium w-1/2 text-white bg-green-700 hover:bg-green-800 focus:outline-none active:ring-2 active:ring-green-700 rounded-full text-sm px-5 py-2.5 text-center "
            >
              Generate Text
            </button>
          </div>

          {/* output display block */}
          <div className="h-full">
            <label
              htmlFor="input"
              className="block mb-2 text-md font-bold text-green-300"
            >
              Generated Text
            </label>
            <div
              className="flex rounded-lg border border-green-600 p-2.5 w-full text-sm text-white bg-transparent h-28 overflow-y-auto"
              style={{ height: "337px" }}
            >
              {status == "loaded" ? (
                <div>{showOutput()}</div>
              ) : (
                <AnimationScreen message={status} />
              )}
            </div>
          </div>
        </div>
        <div className="relative mt-5 text-center hidden md:block ">
          <button
            type="button"
            className="font-medium w-1/2 text-white bg-green-700 hover:bg-green-800 focus:outline-none active:ring-2 active:ring-green-700 rounded-full text-sm px-5 py-2.5 text-center"
            onClick={text.trim().length === 0 ? modalState : show}
          >
            Generate Text
          </button>
        </div>
      </div>
      <PopUpModal />
    </section>
  );
}
