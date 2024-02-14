import TextBox from "@/components/atoms/textbox";
import ToolPageDescription from "@/components/molecules/toolPageDescription";
import React from "react";

export default function TextGeneratorPage() {
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
        className="relative bg-gray-900 max-w-5xl mx-2 px-10 py-10 sm:px-10 lg:mx-auto text-gray-50 rounded-3xl border-2 border-green-600"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-green-800 to-yellow-800 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative text-lg text-white mb-4">
          Rewrite your existing text for multiple platforms in a single click.
          Create high-quality, engaging copy with tone and readability on track.
          Stick to 3-200 words for best results.
        </div>
        <div
          className="relative max-w-2xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 items-start md:max-w-none lg:max-w-none"
          data-aos-id-blocks
        >
          <TextBox label="Your Text" />
          <div className="relative text-center md:hidden">
            <button
              type="button"
              className="font-medium w-1/2 text-white text-lg bg-green-700 hover:bg-green-800 focus:outline-none active:ring-2 active:ring-green-700 rounded-full text-sm px-5 py-2.5 text-center "
            >
              Check Spell
            </button>
          </div>

          <TextBox label="Corrected Text" />
        </div>
        <div className="relative mt-5 text-center hidden md:block ">
          <button
            type="button"
            className="font-medium w-1/2 text-white text-lg bg-green-700 hover:bg-green-800 focus:outline-none active:ring-2 active:ring-green-700 rounded-full text-sm px-5 py-2.5 text-center "
          >
            Generate Text
          </button>
        </div>
      </div>
    </section>
  );
}
