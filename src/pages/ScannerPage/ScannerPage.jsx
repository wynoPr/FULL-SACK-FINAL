import React from "react";
// import { Scanner } from "../../components/Scanner/Scanner";
import axios from "axios";
const database = "http://localhost:3000/foods/code/";
//4 res.data is a prop sent to Item page
export default function ScannerPage({ scannedItem }) {
  //2 to compare the barcode, we need to make a petition to the product from the database
  // const compareProduct = async (code) => {
  //   try {
  //     //3 we make a get request to the database with the code that the quagga scanner detected
  //     const res = await axios.get(`http://localhost:3000/foods/code/${code}`);
  //     console.log(res.data.food);
  //     //we access to the data.food so its more handy
  //     const scannedItem = res.data.food;

  //     // const data = res.data();
  //     // console.log(code);
  //   } catch (error) {
  //     console.error("error at compareProduct", error);
  //   }
  // };
  //1 when the father receives the barcode as a prop, it calls the compareProduct function
  return (
  <>
    {/* <Scanner
      onScan={compareProduct}
      //5 res.data is sent to ItemPage as scannedItem
      // scannedItem={scannedItem}
    /> */}
  </>
  );
}
