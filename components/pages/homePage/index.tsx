import React from "react";
import Features from "@/components/organisms/Features";
import Description from "@/components/organisms/description";
import OurTeam from "@/components/organisms/ourTeam";

export default function HomePage() {
  return (
    <main>
      <Description />
      <Features />
      <OurTeam />
    </main>
  );
}
