import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Scanner } from "../../components/Scanner/Scanner";
import Header from "../../components/Header/Header";
const database = "http://localhost:3000/";
const _id = "6648c1d5bd29d12e33a68445";

const ItemPage = () => {
  // Define a state variable to store the user's allergens
  const [userAllergens, setUserAllergens] = useState([]);
  const { code } = useParams();
  console.log(code);

  // Fetch the user's allergens from the API
  useEffect(() => {
    axios
      .get(`${database}users/${_id}`)
      .then((response) => {
        setUserAllergens(response.data.allergens);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Define a state variable to store the food data
  const [foodData, setFoodData] = useState(false);
  if (foodData) {
    console.log(foodData);
  }



  // Fetch the food data from the API
  useEffect(() => {
    axios.get(`${database}foods/code/${code}`)
      .then((response) => {
        setFoodData(response.data.food);
      })
      .catch((error) => {
        console.error(error);
      });

  }, [code]);

  // Check if the user has any allergens that match the food's allergens
  const hasMatchingAllergens = foodData && userAllergens && userAllergens.some((allergenId) => foodData.allergens.includes(allergenId));
  //--------------------------------------------------------------------------------
  // Function to get matching allergies
  function getMatchingAllergies(userInfo, foodData) {
    if (!userInfo || !foodData || !foodData.allergId) return [];

    const userAllergyIds = userInfo.allergyId;
    console.log('userAllergyIds:', userAllergyIds);

    const foodAllergies = foodData.allergId;
    console.log('foodAllergies:', foodAllergies);

    const matchingAllergies = foodAllergies.filter(allergy =>
      userAllergyIds.includes(allergy._id)
    ).map(allergy => allergy.name);

    return matchingAllergies;
  }

  // Parse userInfo from localStorage
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  console.log('userInfo:', userInfo);

  let matchingAllergies = [];
  if (userInfo && foodData) {
    matchingAllergies = getMatchingAllergies(userInfo, foodData);
  }
  console.log('matchingAllergies:', matchingAllergies);


  //--------------------------------------------------------------------------------


  // Render the food data, with a warning if the user has a matching allergen
  return (
    <>
      <Header />
      {Object.keys(foodData).length > 1 && (
        <section >
          <h1 className="h1 ">{foodData.name}</h1>

          {matchingAllergies.length ?
            <>
              <p className="h2">
                Sorry dear, don´t wanna mess with your beautiful life, right?
                You are sensitive to: {matchingAllergies.join(', ')}.
              </p>
              <img src={foodData.image} alt={foodData.name} className="img invalid arreglo" />

            </>
            :
            <>
              <p className="h2">
                Go ahead!! Eat it, safe and sound for you honey!

              </p>
              <img src={foodData.image} alt={foodData.name} className="img valid" />

            </>
          }
          <div className="item">
            <p>{foodData.description}</p>
            <ul className="container">
              {foodData.allergId.map((allergen) => (
                <li key={allergen} className="tag">{allergen.name}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default ItemPage;
