import React, { Profiler, useEffect, useRef, useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import "./Home.scss";
import Profile from "../Profile/Profile";
import History from "../Styles/History/History";

export default function Home() {
  const path = window.location.pathname;

  useEffect(() => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView();
    }
  }, []);

  //nav when scrollX
  const [detDX, setDetDX] = useState(0);
  const masterRef = useRef(null);

  useEffect(() => {
    let startX = 0;
    let originalScrollX = 0;
    let currentX = 0;

    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX;
      originalScrollX = masterRef.current.scrollLeft;
      console.log("Touch start:", startX);
      console.log("OG Scroll:", originalScrollX);
    };

    const handleTouchEnd = (event) => {
      const viewportWidth = window.innerWidth;
      const dMin = viewportWidth * 0.6;
      console.log("Touch end:", currentX);

      if (currentX - startX > dMin) {
        setDetDX(-1);
        console.log(-1);
      } else if (currentX - startX < -dMin) {
        setDetDX(1);
        console.log(1);
      } else {
        setDetDX(0);
        console.log(0);
        masterRef.current.scrollTo({ left: 100, behavior: "smooth" });
        console.log(document.querySelector(".master"));
        document
          .querySelector(".master")
          .scrollTo({ left: viewportWidth, behavior: "smooth" });
      }
    };

    const handleTouchMove = (event) => {
      currentX = event.touches[0].clientX;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
  //

  return (
    <div className="master">
      <Profile></Profile>
      <section id="home" className="home" ref={masterRef}>
        <h2 className="h2 f-w home_title">Click to Start</h2>
        <Link className="btt_scanner" to="/scanner">
          <div className="btt_scanner_img" alt="Hypal logo">
            Logo
          </div>
          <div className="blob_a"></div>
          <div className="blob_b"></div>
          <div className="blob_c"></div>
        </Link>
        <nav className="home_nav">
          <Link className="link_nav" to="/profile">
            <span className="material-symbols-rounded icon">for_you</span>
            <span className="span f-w">Profile</span>
          </Link>
          <div>
            <NavLink className="navy link" to="/history">
              o
            </NavLink>
            <NavLink className="navy link" to="/">
              o
            </NavLink>
            <NavLink className="navy link" to="/profile">
              o
            </NavLink>
          </div>
          <Link className="link_nav" to="/history">
            <span className="material-symbols-rounded icon">history</span>
            <span className="span f-w">History</span>
          </Link>
        </nav>
      </section>
      <History></History>
      {/* moves navigations */}
      {path == "/" && detDX == 1 && (
        // Cambia '/ruta-de-destino' por la URL a la que quieres redirigir al usuario
        <Navigate to="/history" />
      )}
      {path == "/" && detDX == -1 && (
        // Cambia '/ruta-de-destino' por la URL a la que quieres redirigir al usuario
        <Navigate to="/profile" />
      )}
    </div>
  );
}
