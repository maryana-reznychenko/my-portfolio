import { Link } from "react-router-dom";
import MenuIcon from "../../assets/img/icons/MenuIcon.svg";

import styles from "../Header/Header.module.css";

const HeaderForTheProjectPage = () => {
  return (
    <aside className="fixed top-0 left-0 right-0 font-montserrat font-light sm:text-xl tracking-wide text-[#7A7A7A] backdrop-blur-md">
      <nav className="flex flex-row py-6 px-5 lg:px-16 ">
        <Link to="/#projects" className="flex items-center gap-2">
          <img className="h-8 w-8" src={MenuIcon} alt="The dots icon" />
          <span className={styles.link_hover}>BACK TO ALL PROJECTS</span>
        </Link>
      </nav>
    </aside>
  );
};

export default HeaderForTheProjectPage;
