"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./Header.scss";
import logo from "../Assets/Images/logo white.png";

const Header: React.FC = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false); // Track navigation state (open or close)

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value);
  // };

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState); // Toggle navigation visibility
  };

  return (
    <header className={`header ${isNavOpen ? "mobile-nav-active" : ""}`}>
      <div className="logo">
        <Link href="/">
          <Image
            src={logo}
            alt="logo soulArt"
            width={200}
            style={{ height: "auto" }}
          />
        </Link>
      </div>

      <nav className="main-nav">
        <ul>
          <li>
            <Link href="/artists">გაყიდე ნახატები</Link>
          </li>
          <li>
            <Link href="/artworks">შეიძინე ნახატები</Link>
          </li>
          <li>
            <Link href="/contact">ჩემი შეკვეთები</Link>
          </li>
          <li className="mobileAuth">
            <Link href="/auth">შესვლა</Link>
          </li>
        </ul>
      </nav>

      <div className="auth-cart">
        <Link className="d-none" href="/auth">
          შესვლა
        </Link>
        <Link href="/cart">
          🛒<span> კალათა</span>
        </Link>
      </div>

      {/* Hamburger button for mobile view */}
      <div className="mobile-nav-btn" onClick={toggleNav}>
        <span className={`hamburger-icon ${isNavOpen ? "close" : ""}`}>
          {isNavOpen ? "×" : "☰"}
        </span>
      </div>
    </header>
  );
};

export default Header;
