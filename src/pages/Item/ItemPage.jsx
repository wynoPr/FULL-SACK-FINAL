import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const database = "http://localhost:3000/";
const _id = "6648c1d5bd29d12e33a68445";

// DESCOMENTAR Q ES SOLO PARA EL PUSH
// const ItemPage = () => {
//   // Define a state variable to store the user's allergens
//   const [userAllergens, setUserAllergens] = useState([]);
//   const { code } = useParams();
//   console.log(code);

//   // Fetch the user's allergens from the API
//   useEffect(() => {
//     axios
//       .get(`${database}users/${_id}`)
//       .then((response) => {
//         setUserAllergens(response.data.allergens);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   // Define a state variable to store the food data
//   const [foodData, setFoodData] = useState(null);

//   // Fetch the food data from the API
//   useEffect(() => {
//     axios
//       .get(`${database}foods/code/${code}`)
//       .then((response) => {
//         setFoodData(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [code]);

//   // Check if the user has any allergens that match the food's allergens
//   const hasMatchingAllergens =
//     foodData &&
//     userAllergens.some((allergenId) => foodData.allergens.includes(allergenId));

//   // Render the food data, with a warning if the user has a matching allergen
//   return (
//     <div>
//       {foodData && (
//         <>
//           <h1>{foodData.name}</h1>
//           <p>{foodData.description}</p>
//           <ul>
//             {foodData.allergens.map((allergen) => (
//               <li key={allergen}>{allergen}</li>
//             ))}
//           </ul>
//           {hasMatchingAllergens && (
//             <p>
//               Warning: This food contains an allergen that you are sensitive to.
//             </p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

export default ItemPage;
