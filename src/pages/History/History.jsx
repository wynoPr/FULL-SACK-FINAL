import React, { useContext, useEffect, useState } from "react";
import "./History.scss";
import Home from "../Home/Home";
import { Navigate, useLocation } from "react-router-dom";
import HistoryCard from "../../components/HistoryCard/HistoryCard";
import { GlobalContext } from "../../App";
import Profile from "../Profile/Profile";
import Header from "../../components/Header/Header";
import axios from "axios";

export default function History() {
  const { lastP, setLastP } = useContext(GlobalContext);

  const path = useLocation().pathname;

  // ---------------------------------------------------
  const [respuesta, setRespuesta] = useState([]);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    let array = [];
    for (let index = 0; index < user.history.length; index++) {
      axios
        .get(`http://localhost:3000/foods/code/${user.history[index]}`)
        .then((response) => {
          array = [...array, response.data.food];
          setRespuesta(array);
          console.log(array);
        });
    }
  }, []);

  // ---------------------------------------------------

  //stablish last page viewed
  useEffect(() => {
    if (path === "/history") {
      return () => {
        setLastP(path);
      };
    }
  }, []);
  //

  useEffect(() => {
    const element = document.getElementById("history");
    if (element && path === "/history") {
      element.scrollIntoView();
    }
  }, []);

  //nav when scrollX
  const [detDX, setDetDX] = useState(0);

  useEffect(() => {
    if (path === "/history") {
      let startX = 0;
      let currentX = 0;

      const handleTouchStart = (event) => {
        startX = event.touches[0].clientX;
        // console.log('Touch start:', startX);
      };

      const handleTouchEnd = (event) => {
        const viewportWidth = window.innerWidth;
        const dMin = viewportWidth * 0.6;
        // console.log('Touch end:', currentX);

        if (currentX - startX > dMin && currentX != 0) {
          // console.log(-1);
          document
            .querySelector(".master")
            .scrollTo({ left: 0, behavior: "smooth" });
          setTimeout(() => {
            setDetDX(-1);
          }, 300);
        } else {
          setDetDX(0);
          // console.log(0);
          // console.log( document.querySelector(".master"));
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
    }
  }, []);

  return (
    <>
      {path === "/history" && <Home />}
      <section className="history container" id="history">
        <Header />
        <h2 className="h1 danger history_head mg-b-20">
          Which are your last scans?
        </h2>
        {/* Cambiar cuando estén las peticiones */}

        {/* for (let i = 0; i < respuesta.length + 1; i++) {
            <HistoryCard respuesta={respuesta} key={i} size={(i == 0) && '2'} i='i' />;
          } */}
        {respuesta.map((item, index) => (
          <HistoryCard item={item} key={index} />
        ))}

        {/* <button className='btt h3 print_info'>Generate Register</button> */}
      </section>

      {path == "/history" && detDX == -1 && (
        // Cambia '/ruta-de-destino' por la URL a la que quieres redirigir al usuario
        <Navigate to="/" />
      )}
    </>
  );
}
