import React, { useState } from 'react'
import styles from "./Home.modules.scss"
import HeroSection from '../../components/Home/HeroSection/HeroSection';

export default function Home() {
  console.log(useState(5));

  return (
    <>
      <HeroSection />
      <div style={{height: "5000px", width: "20px"}}></div>
    </>
  )
}
