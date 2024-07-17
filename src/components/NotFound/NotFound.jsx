import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import HistoryCard from "../HistoryCard/HistoryCard";

const NotFound = () => {
  const [foodsArray, setFoodsArray] = useState([]);

  useEffect(() => {
    const getFoods = async () => {
      const response = await axios.get("http://localhost:3000/foods");
      console.log(response.data.data);
      setFoodsArray(response.data.data);
    }
    getFoods();
  }, []);







  return (
    <>
      <section className="container history">

        <h1 className="h1 danger history_head mg-b-20">
          Did you mean...
        </h1>
        {foodsArray.map((food) => (
          <HistoryCard key={food._id} item={food}></HistoryCard>
        ))}
      </section>
    </>
  );
};

export default NotFound;
