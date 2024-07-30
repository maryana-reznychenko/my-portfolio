import MailTo from "../assets/img/icons/MailTo.svg";
import GitHub from "../assets/img/icons/GitHub.svg";
import LinkedIn from "../assets/img/icons/LinkedIn.svg";
import Facebook from "../assets/img/icons/Facebook.svg";

function Footer() {
  return (
    <footer className="flex  items-center justify-end py-6 px-16 mt-auto ">
      <address>
        <ul className="flex gap-5 ">
          <li>
            <a
              href="mailto:maryanarez@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-8 w-8"
                src={MailTo}
                alt="Mail Envelope Icon"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/maryana-reznychenko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-8 w-8"
                src={GitHub}
                alt="GitHub Logo Icon"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/maryana-reznychenko-255666154/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-8 w-8" src={LinkedIn} alt="LinkedIn Logo"></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100006668104169"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-8 w-8" src={Facebook} alt="Facebook Logo"></img>
            </a>
          </li>
        </ul>
      </address>
    </footer>
  );
}

export default Footer;
