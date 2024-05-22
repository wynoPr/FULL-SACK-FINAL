import Quagga from "quagga";
import { useEffect } from "react";
import "./Scanner.scss";
import { useNavigate } from "react-router-dom";

//4last but not least (cuz its the last thing to do): onScan is a prop sent to the father
export function Scanner({ onScan, scannedCode, navigate }) {
  // const navigate = useNavigate();

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
    //1 when a barcode is detected, the onScan function is called
    Quagga.onDetected((code) => {
      //2 onScan is a prop that holds the code of the barcode
      onScan(code.codeResult.code);
      Quagga.stop();
      localStorage.setItem("lastItem", onScan(code.codeResult.code));
      // console.log(code);
    });
    //3 initialize the barcode scanner
    initBarcode();
  }, []);

  return <div className="c-barcode-scanner"></div>;
}
