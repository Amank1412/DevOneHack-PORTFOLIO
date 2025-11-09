import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => {
            // map known social names to profile URLs
            const href =
              socialImg.name === "linkedin"
                ? "https://www.linkedin.com/in/amank1412/"
                : socialImg.name === "x"
                ? "https://x.com/Amank1412"
                : "#";

            return (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
              </a>
            );
          })}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Aman Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
