"use client";

import AnimationScreen from "@/components/atoms/animationScreen";
import TextBox from "@/components/atoms/textbox";
import ToolPageDescription from "@/components/molecules/toolPageDescription";
import React from "react";
import useSpellingCorrector from "./useSpellingCorrector";
import PopUpModal from "@/components/molecules/popUpModal";

export default function SpellingCorrectorPage() {
  const {
    text,
    setText,
    show,
    modalState,
    setCorrectionOption,
    setModelOption,
    status,
    showOutput,
  } = useSpellingCorrector();
  return (
    <section className="relative">
      {/* page description */}
      <ToolPageDescription
        title="Spelling Corrector"
        subTitle="Write Effectively and Correctly with AI Models"
        description="Refine your text flawlessly with our spelling correction model, ensuring your message resonates perfectly with your audience."
      />

      {/* box section */}
      <div
        className="relative bg-gray-900 mb-20 max-w-5xl mx-2 px-10 py-10 sm:px-10 lg:mx-auto text-gray-50 rounded-3xl border-2 border-green-600"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-green-800 to-yellow-800 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative text-lg text-white mb-5" id="cd">
        Spelling can be tricky because it&apos;s not always easy. And spelling in Nepali language can be more challenging for learners due to its unique script and phonetic structure. Using top-notch writing tools can help you feel more confident. So, try it now.
        </div>

        {/* options */}
        <div className="relative flex justify-between flex-wrap gap-4 mb-5">
          <div className="relative flex items-center">
            <button
              type="button"
              id="knlm"
              onClick={() => {
                setModelOption("knlm");
              }}
              className="border-l border-t border-b border border-green-200 font-medium rounded-l-md text-white bg-green-900 px-4 py-2"
            >
              KN Model
            </button>
            <button
              id="transformer"
              onClick={() => {
                setModelOption("transformer");
              }}
              type="button"
              className="border-l border-t border-b border border-green-200 font-medium rounded-r-md text-white px-4 py-2"
            >
              Transformer Model
            </button>
          </div>
          <div className="relative flex items-center">
            <button
              type="button"
              id="Auto Correction"
              onClick={() => {
                setCorrectionOption("Auto Correction");
              }}
              className="border-l border-t border-b border border-green-200 font-medium rounded-l-md text-white px-4 py-2 bg-green-900"
            >
              Auto Correction
            </button>
            <button
              id="Manual Correction"
              onClick={() => {
                setCorrectionOption("Manual Correction");
              }}
              type="button"
              className="border-l border-t border-b border border-green-200 font-medium rounded-r-md text-white  px-4 py-2"
            >
              Manual Correction
            </button>
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
              Check Spell
            </button>
          </div>

          {/* output display block */}
          <div className="h-full">
            <label
              htmlFor="input"
              className="block mb-2 text-md font-bold text-green-300"
            >
              Corrected Text
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
            Check Spell
          </button>
        </div>
      </div>
      <PopUpModal />
    </section>
  );
}
