import React, { useState } from 'react'
import styles from "./Home.modules.scss"
import HeroSection from '../../components/Home/HeroSection/HeroSection';
import BestSellers from '../../components/Home/BestSellers/BestSellers';
import KidsOff from '../../components/Home/KidsOff/KidsOff';
import ShopByCollection from '../../components/Home/ShopByCollection/ShopByCollection';

export default function Home() {
  console.log(useState(5));

  return (
    <>
      <HeroSection />
      <BestSellers />
      <KidsOff />
      <ShopByCollection />
      <div style={{ height: "5000px", width: "20px" }}></div>
    </>
  )
}
