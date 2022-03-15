import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="cr">
          Copyright 2022 <br />
          Rana Codes
        </div>
        <div className="links">
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
