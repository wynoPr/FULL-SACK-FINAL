import React, { useContext } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../../App";

export default function Header() {
  const { lastP, setLastP } = useContext(GlobalContext);
  const path = useLocation().pathname;

  return (
    <header className="header">
      <Link
        to={lastP}
        className={
          path == "/scanner" ? "btt_txt_smol_w h3 " : "btt_txt_smol h3"
        }
      >
        &lt; Go Back
      </Link>
      <Link to="/" className="">
        <span
          className={
            path == "/scanner"
              ? "material-symbols-rounded icon link_w"
              : "material-symbols-rounded icon link"
          }
        >
          close
        </span>
      </Link>
    </header>
  );
}
