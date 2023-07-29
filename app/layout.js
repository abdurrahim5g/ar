import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

import {
  FaBeer,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const metadata = {
  title: "Abdur Rahim",
  description: "Abdur Rahim portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header-area py-4 hidden md:block">
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="logo-area">
                <Link href={"/"}>
                  <Image
                    src="/abdurrahim5g.png"
                    alt="Abdur Rahim"
                    width={200}
                    height={60}
                  />
                </Link>
              </div>
              <div className="menu-area">
                <nav className="main-menu">
                  <ul className="flex gap-3 capitalize text-lg">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#about">about</a>
                    </li>
                    <li>
                      <a href="#portfolio">portfolio</a>
                    </li>
                    <li>
                      <a href="#contact">contact</a>
                    </li>
                    <li>
                      <a href="#resume">resume</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* header area */}
        {children}

        <footer className="footer-area bg-[--primary-color] py-12">
          <div className="container">
            <div className="text-center">
              <div className="flex justify-center mb-10">
                <Image
                  src="/logo-footer.png"
                  alt="Abdur Rahim"
                  width={200}
                  height={80}
                />
              </div>

              <div className="social-links">
                <ul className="flex items-center justify-center text-2xl gap-4 md:text-4xl lg:gap-10 text-gray-100">
                  <li>Follow me on:</li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/abdurrahim5g/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/abdurrahim5g"
                      target="_blank"
                    >
                      <FaGithub />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/abdurrahim5g"
                      target="_blank"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "https://www.youtube.com/channel/UCpCybQ0_m_DOBd6yIumP4sg"
                      }
                      target="_blank"
                    >
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
