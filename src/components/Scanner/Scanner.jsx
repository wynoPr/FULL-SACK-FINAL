import Quagga from "quagga";
import { useEffect, useState } from "react";
import "./Scanner.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NotFound from "./../NotFound/NotFound";

export function Scanner({ onScan, scannedCode, navigate }) {
  const [codeScanned, setCodeScanned] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if (scannedCode !== null) {
    navigate(`/item/${scannedCode}`);
  }

  useEffect(() => {
    const initBarcode = () => {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector(".c-barcode-scanner"), // Or '#yourElement' (optional)
          },
          decoder: {
            readers: [
              "code_128_reader",
              "ean_reader",
              "codabar_reader",
              "upc_reader",
              "upc_e_reader",
            ],
          },
          timeout: 5000, // Set 5000ms timeout
        },
        function (err) {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
        }
      );
    };
    Quagga.onDetected((code) => {
      setCodeScanned(code.codeResult.code);
      Quagga.stop();
      localStorage.setItem("lastItem", code.codeResult.code);
      const baseUrl = "http://localhost:3000/users/history/";
      axios
        .patch(`${baseUrl}${user._id}`, { history: [code.codeResult.code] })
        .then((response) => {
          console.log(code.codeResult.code);
          console.log(response);
          localStorage.removeItem("userInfo");
          localStorage.setItem("userInfo", JSON.stringify(response.data.data));
        })
        .catch((error) => {
          setNotFound(true);
        });
    });
    initBarcode();
  }, []);

  if (notFound) {
    return <NotFound />;
  }

  return <div className="c-barcode-scanner"></div>;
}
