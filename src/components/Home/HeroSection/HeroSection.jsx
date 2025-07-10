import FloatingBackgroundSection from '../../ui/FloatingBackgroundSection/FloatingBackgroundSection'
import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.scss"
import { NavLink } from "react-router-dom";
import { PRODUCT, SHOPNOW } from "../../../routes";

export default function HeroSection() {
  // const sectionRef = useRef(null);
  const left_topRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY * 0.3; // կարգավորի՝ որքան ուժեղ շարժվի նկարը
      section.style.backgroundPosition = `center calc(50% - ${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FloatingBackgroundSection sectionRef={sectionRef} left_topRef={left_topRef} parentStyles={styles}/>
  )
}