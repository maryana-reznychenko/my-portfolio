import React, { useState, useEffect, useCallback } from "react";
import MyPlace from "../../assets/img/icons/MyPlace.svg";
import MenuIcon from "../../assets/img/icons/MenuIcon.svg";

import styles from "./Header.module.css";

//- - - - - - - - - - - - - - - - - - - - - - -
// Function to get current Stockholms time. Use React.memo to prevent unnecessary rendering
//- - - - - - - - - - - - - - - - - - - - - - -
const GetStockholmsTime = React.memo(() => {
  const [timeString, setTimeString] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeString(getFormattedTime());
    }, 60000); // Update every minute
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  function getFormattedTime() {
    // Create a new Date object for the current time
    let now = new Date();

    // Create a DateTimeFormat object for the 'Europe/Stockholm' time zone
    let formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Stockholm",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Use 24-hour time format
    });

    // Format the current date and time in Stockholm time zone
    let timeParts = formatter.formatToParts(now);

    // Extract hours and minutes
    let hours = timeParts.find((part) => part.type === "hour").value;
    let minutes = timeParts.find((part) => part.type === "minute").value;

    return `${hours}:${minutes}`;
  }

  return (
    <div className="flex flex-row self-baseline gap-2 text-[#A1001B] font-rokkit text-2xl font-light">
      <img className="h-8 w-8 " src={MyPlace} alt="My Current Place Icon"></img>
      <p className="hidden md:block pt-0">STOCKHOLM</p>
      <p className="text-xl pt-0">{timeString}</p>
    </div>
  );
});

//- - - - - - - - - - - - - - - - - - - - - - - - -
// use React.memo to prevent unnecessary rendering of current time & icon every time the menu opens-closes
//- - - - - - - - - - - - - - - - - - - - - - - - -
const MenuButton = React.memo(({ isOpen, toggleMenu }) => (
  <button onClick={toggleMenu}>
    <img
      className="h-8 w-8 "
      src={MenuIcon}
      alt="The dots icon represents the menu"
    ></img>
  </button>
));

//- - - - - - - - - - - - - - - - - - - - - - -
//HEADER -> hook & function for the closed menu on small screens
//- - - - - - - - - - - - - - - - - - - - - - -
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  //- - - - - - - - - - - - - - - - - - - - - - -
  //Function for automatically close the menu when a menu item is chosen
  //- - - - - - - - - - - - - - - - - - - - - - -
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 font-rokkit text-2xl font-light backdrop-blur-md">
      <nav className="flex items-center justify-between py-6 px-5 lg:px-16 gap-5 tracking-wide">
        <GetStockholmsTime />
        <div className="md:hidden sm:hidden flex flex-col items-end ">
          <MenuButton isOpen={!isMenuOpen} toggleMenu={toggleMenu} />
          {isMenuOpen && (
            <ul onClick={handleMenuItemClick} className="mt-5">
              <li className={styles.link_hover}>
                <a href="#home">HOME</a>
              </li>
              <li className={styles.link_hover}>
                <a href="#projects">PROJECTS</a>
              </li>
              <li className={styles.link_hover}>
                <a href="#about">ABOUT</a>
              </li>
              <li className={styles.link_hover}>
                <a href="#contact">CONTACT</a>
              </li>
              <li className={styles.link_hover}>
                <a
                  className=" text-[#A1001B] font-bold hover:text-[#f9f9f9]"
                  href="https://drive.google.com/file/d/19gqpg29mP88afy_H383vS1EYc03aEJ3E/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV
                </a>
              </li>
            </ul>
          )}
        </div>
        <ul className="hidden sm:flex gap-5 tracking-wide">
          <li className={styles.link_hover}>
            <a href="#home">HOME</a>
          </li>
          <li className={styles.link_hover}>
            <a href="#projects">PROJECTS</a>
          </li>
          <li className={styles.link_hover}>
            <a href="#about">ABOUT</a>
          </li>
          <li className={styles.link_hover}>
            <a href="#contact">CONTACT</a>
          </li>
          <li className={styles.link_hover}>
            <a
              className="text-[#A1001B] font-bold hover:text-[#f9f9f9]"
              href="https://drive.google.com/file/d/19gqpg29mP88afy_H383vS1EYc03aEJ3E/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
