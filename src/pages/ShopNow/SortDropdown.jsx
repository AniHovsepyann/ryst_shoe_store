import { useState, useEffect, useRef } from "react";
import styles from './SortDropdown.module.scss';

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Recommended");
  const [activeIndex, setActiveIndex] = useState(0);
  const dropdownRef = useRef(null);

  const options = [
    "Recommended",
    "Newest",
    "Price (low to high)",
    "Price (high to low)",
    "Name A-Z",
    "Name Z-A",
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option, index) => {
    setSelected(option);
    setActiveIndex(index);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.dropdown} ${styles.sortDropdown}`} ref={dropdownRef}>
      <div
        className={`${styles["dropdown-toggle"]} ${styles.selectedOption}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>
          Sort By: <span>{selected}</span>
        </p>
        <div className={`${styles.after} ${isOpen ? styles.rotated : ""}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className={`${styles["dropdown-menu"]} ${isOpen ? styles.active : ""}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className={styles["sort-product"]}
            onClick={() => handleOptionClick(option, index)}
            style={{
              backgroundColor: activeIndex === index ? "rgba(0,0,0,0.12)" : "",
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
