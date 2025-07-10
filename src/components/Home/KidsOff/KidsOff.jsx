import { useEffect, useRef } from "react";
import styles from "./KidsOff.module.scss"
import { NavLink } from "react-router-dom";
import { PRODUCT, SHOPNOW } from "../../../routes";
import FloatingBackgroundSection from '../../ui/FloatingBackgroundSection/FloatingBackgroundSection'


export default function KidsOff() {
const sectionRef = useRef(null);

useEffect(() => {
  const section = sectionRef.current;

  const handleScroll = () => {
    const offset = window.scrollY * 0.05; // կամ 0.1
    section.style.backgroundPosition = `center calc(50% + ${offset}px)`;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <FloatingBackgroundSection sectionRef={sectionRef} parentStyles={styles}/>
  )
}
