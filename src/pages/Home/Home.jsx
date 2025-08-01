import React, { useState } from 'react'
import styles from "./Home.modules.scss"
import HeroSection from '../../components/Home/HeroSection/HeroSection';
import BestSellers from '../../components/Home/BestSellers/BestSellers';
import KidsOff from '../../components/Home/KidsOff/KidsOff';
import ShopByCollection from '../../components/Home/ShopByCollection/ShopByCollection';
import Sustainability from '../../components/Home/Sustainability/Sustainability';
import CustomerReviews from '../../components/Home/CustomerReviews/CustomerReviews';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BestSellers />
      <KidsOff />
      <ShopByCollection />
      <Sustainability />
      <CustomerReviews />
    </>
  )
}
