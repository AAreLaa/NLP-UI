import React from "react";
import Features from "@/components/organisms/feature";
import Description from "@/components/organisms/description";
import OurTeam from "@/components/organisms/ourTeam";
import Tools from "@/components/organisms/tools";

export default function HomePage() {
  return (
    <main>
      <Description />
      <Features />
      <Tools />
      <OurTeam />
    </main>
  );
}
