import React from "react";
import Header from "../Header/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <div>
        <h1 className="h1 danger history_head mg-b-20">
          Sorry dear, we can't find that product yet
        </h1>
        <img className="img-r" src="" alt="" />
      </div>
    </>
  );
};

export default NotFound;
