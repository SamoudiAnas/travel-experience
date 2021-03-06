import Link from "next/link";
import styled from "styled-components";
import { useState, useEffect } from "react";

//components
import SearchInput from "./SearchInput";

//icons
import { BiMenuAltLeft } from "react-icons/bi";

function Navbar(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleLinks = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [width, setWidth] = useState(null);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (width <= 768) {
      setIsNavOpen(false);
    }
  }, [width]);

  return (
    <Wrapper className="responsive_container " isNavOpen={isNavOpen}>
      <h3 className="logo">
        TRAVEL <br /> EXPERIENCE
      </h3>

      <div className="nav_items">
        <div className="links">
          <Link href="/">
            <div className="link">Home</div>
          </Link>
          <Link href="/about">
            <div className="link">Forum</div>
          </Link>
          <Link href="/destinations">
            <div className="link">Destinations</div>
          </Link>
          <Link href="/booking">
            <div className="link">Booking</div>
          </Link>
        </div>

        <SearchInput />

        <Link href="/login">
          <div className="auth">Login / Sign up</div>
        </Link>
      </div>
      <BiMenuAltLeft className="menu_icon" onClick={toggleLinks} />
      {props.children}
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.mobilePadding};

  @media screen and (min-width: 768px) {
    gap: 2rem;
    padding: ${(props) => props.theme.desktopPadding};
  }

  .logo {
    font-weight: 800;
    font-size: 1rem;
    line-height: 1rem;
    color: ${(props) => props.theme.primary};
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-grow: 1;

    @media screen and (max-width: 768px) {
      display: initial;
    }
  }

  .nav_items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-grow: 1;

    @media screen and (max-width: 768px) {
      position: fixed;
      top: ${(props) => (props.isNavOpen ? "4rem" : "-100%")};
      left: 0;
      right: 0;
      width: 90%;
      margin: 0 auto;
      padding: 2rem 1rem;
      background-color: #ffffff;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      z-index: 100;
      text-align: center;
      display: initial;
    }
  }

  .link {
    font-weight: 500;
    cursor: pointer;

    &:hover {
      font-weight: 600;
      color: ${(props) => props.theme.primary};
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  .auth {
    padding: 1rem 2rem;
    color: white;
    background-color: ${(props) => props.theme.primary};
    border-radius: 50px;
    cursor: pointer;
  }

  .menu_icon {
    color: ${(props) => props.theme.primary};
    width: 2rem;
    height: 2rem;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
