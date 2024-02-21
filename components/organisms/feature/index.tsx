import Image from "next/image";
import React from "react";
import TextIcon from "@/public/images/featureIcons/text.svg";
import SpellIcon from "@/public/images/featureIcons/spell.svg";
import GenerateIcon from "@/public/images/featureIcons/generate.svg";
import ManualIcon from "@/public/images/featureIcons/manual.svg";
import FeatureCard from "@/components/molecules/featureCard";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10" id="learnmore">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
            data-aos="fade-up"
          >
            <h2 className="h2 mb-4">
              What We Have To &quot;{''}
              <span className="text-yellow-300">Offer</span>&quot;
            </h2>
            <p className="text-xl text-gray-400">
              Our mission is to fulfill everyone&apos;s{" "}
              <span className="text-gray-300">NEEDS</span> in the field of
              Nepali Language Processing. Most user-friendly interface with
              plenty of exclusive{" "}
              <span className="text-gray-300">FEATURES</span> to execute
              efficiency & reliability mission.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-20 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <FeatureCard
              title="Nepali Typing Support"
              description="We provide fast and accurate Nepali language typing support. After you type a word in English and hit a space bar key, the word will be transliterated into Nepali."
            >
              <Image src={TextIcon} alt="image"></Image>
            </FeatureCard>

            {/* 2nd item */}
            <FeatureCard
              title="Text Generation"
              description="We offer text generation tool to seamlessly complete sentences and predict contextually relevant content, functioning much like an auto-completion tool."
            >
              <Image src={GenerateIcon} alt="image"></Image>
            </FeatureCard>

            {/* 3rd item */}
            <FeatureCard
              title="Auto Spelling Correction"
              description="We conduct a thorough review of your writing, highlighting potential spelling errors in red and offering corrective suggestions to enhance accuracy."
            >
              <Image src={SpellIcon} alt="image"></Image>
            </FeatureCard>

            {/* 4th item */}
            <FeatureCard
              title="Manual Spelling Correction"
              description="We empower users to manually correct spelling by selecting from provided options, ensuring precise and satisfactory results."
            >
              <Image src={ManualIcon} alt="image"></Image>
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
}
