import React, { useState } from "react";
import { Scanner } from "../../components/Scanner/Scanner";
import axios from "axios";
import "./ScannerPage.scss";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
const database = "http://localhost:3000/foods/code/";
//4 res.data is a prop sent to Item page
export default function ScannerPage() {
  const [scannedCode, setScannedCode] = useState(null);
  const navigate = useNavigate();
  //2 to compare the barcode, we need to make a petition to the product from the database

  const compareProduct = async (code) => {
    try {
      //3 we make a get request to the database with the code that the quagga scanner detected
      const res = await axios.get(`http://localhost:3000/foods/code/${code}`);
      //we access to the data.food so its more handy
      setScannedCode(code);
      // console.log(scannedItem);


  //     // const data = res.data();
  //     // console.log(code);
  //   } catch (error) {
  //     console.error("error at compareProduct", error);
  //   }
  // };
  //1 when the father receives the barcode as a prop, it calls the compareProduct function
  return (

    <>
      <section className=" scanner">
        <Header />
        <p className="h1 danger history_head mg-b-20">
          Center the code you want to scan in the box below:
        </p>
        <Scanner
          onScan={compareProduct}
          scannedCode={scannedCode}
          navigate={navigate}
          //5 res.data is sent to ItemPage as scannedItem
        />
        <div className="waiting">
          <div className="waiting_dot_a"></div>
          <div className="waiting_dot_b"></div>
          <div className="waiting_dot_c"></div>
        </div>
      </section>
    </>

  );
}
