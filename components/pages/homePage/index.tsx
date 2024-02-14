'use client'

import Features from "@/components/organisms/Features";
import Description from "@/components/organisms/description";
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })
  return (
    <>
      <Description />
      <Features />
    </>
  );
}
