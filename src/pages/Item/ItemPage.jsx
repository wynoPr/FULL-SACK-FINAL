import React, { useState } from "react";
import axios from "axios";
const database = "http://localhost:3000/users/";
const _id = "6648c1d5bd29d12e33a68445";

//me tengo que traer el axios de los users para ver su allergiId y compararlo con el allergenId de res.data
export default function ItemPage({ scannedItem }) {
  const [message, setMessage] = useState("");
  const compareAllergens = async () => {
    try {
      const res = await axios.get(`${database}${_id}`);
      //mapea los allergyId
      //   console.log(res.allergyId);
      const userAllergen = res.data.allergyId;
      const scannedAllergens = scannedItem.allergens.map(
        (allergen) => allergen.id
      );
      const hasMatchingAllergens = userAllergen.some((allergen) =>
        scannedAllergens.includes(allergen)
      );
      //ternaria de los allergens de res.data  no coinciden con los del usuario? pues se lo llevo con scannedItem(res.data) como prop a la página de item y lo pinta de verde porque si q lo puede comer: pues se lo lleva con scannedItem(res.data) como prop a la página de item y lo pinta de rojo porque no lo puede comer
      setMessage(
        hasMatchingAllergens ? (
          <div>Go ahead, eat</div>
        ) : (
          <div>Don't eat itttt!</div>
        )
      );
    } catch (error) {
      console.error("error at compareAllergens", error);
    }
  };
  return (
    <div>
      <button onClick={compareAllergens}>Check Allergens</button>
      {message}
    </div>
  );
}
