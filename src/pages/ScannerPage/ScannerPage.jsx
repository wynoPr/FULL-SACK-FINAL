import React from "react";
import { Scanner } from "../../components/Scanner/Scanner";
import axios from "axios";
const database = "http://localhost:3000/foods/code/";

export default function ScannerPage() {
  //2 to compare the barcode, we need to make a petition to the product from the database
  const compareProduct = async (code) => {
    try {
      const res = await axios.get(`http://localhost:3000/foods/code/${code}`);
      console.log(res.data);

      //SI RECIBE RESPUESTA DE DATA, SE LO LLEVA COMO PROP A LA PAGINA ITEM

      // const data = res.data();
      // console.log(code);
    } catch (error) {
      console.error("error at compareProduct", error);
    }
  };
  //1 when the father receives the barcode as a prop, it calls the compareProduct function
  return <Scanner onScan={compareProduct} />;
}
