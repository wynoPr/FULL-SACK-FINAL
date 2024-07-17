import React, { useState, useEffect } from "react";
import axios from "axios";
import './ItemPage.scss'
import { useParams } from "react-router-dom";
import { Scanner } from "../../components/Scanner/Scanner";
import Header from "../../components/Header/Header";
import Allergen_tag from "./Allergen_tag";
const database = "http://localhost:3000/";

const ItemPage = () => {
  // Define a state variable to store the user's allergens
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const [userAllergens, setUserAllergens] = useState([]);
  const { code } = useParams();
  console.log(code);

  // Fetch the user's allergens from the API
  useEffect(() => {
    axios
      .get(`${database}users/${userInfo._id}`)
      .then((response) => {
        setUserAllergens(response.data.allergens);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Define a state variable to store the food data
  const [foodData, setFoodData] = useState(false);




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
  // console.log('userInfo:', userInfo);

  let matchingAllergies = [];
  if (userInfo && foodData) {
    matchingAllergies = getMatchingAllergies(userInfo, foodData);
  }
  console.log('matchingAllergies:', matchingAllergies);


  //--------------------------------------------------------------------------------


  useEffect(() => {
    console.log('foodData:');
    console.log(foodData);


  }, [foodData])

  // Render the food data, with a warning if the user has a matching allergen
  return (
    <>
      <Header />
      {Object.keys(foodData).length > 1 && (
        <section className="profile container itemspage"  >
          <h1 className="h1 danger profile_head mg-b-20 ">{foodData.name}</h1>

          {matchingAllergies.length ?
            <>
              <p className="h2 danger it item-desc" >
                Sorry dear, don´t wanna mess with your beautiful life, right?
                You are sensitive to: {matchingAllergies.join(', ')}.
              </p>
              <img src={foodData.img} alt={foodData.name} className="img invalid arreglo" />
              <p className="h3 it faint mg-b-20">{foodData.weight} g</p>

            </>
            :
            <>
              <p className="h2 it item-desc">
                Go ahead!! Eat it, safe and sound for you honey!

              </p>
              <img src={foodData.img} alt={foodData.name} className="img valid" />
              <p className="h3 it faint mg-b-20">{foodData.weight} g</p>

            </>
          }
          <div className="item">
            {foodData && <><h3 className="h2">Description:</h3><p className="p">{foodData.comments}</p></>}
            {foodData && <><h3 className="h2">Ingredients:</h3><p className="p">{foodData.ing}</p></>}
            {foodData && <><h3 className="h2" style={{ marginTop: '20px' }}>Nutritional values (100g):</h3><div className="table">
              <h3 className="h3 it">Kcal:</h3><p className="p faint">{foodData.kcal}</p>
              <h3 className="h3 it">Proteins:</h3><p className="p faint">{foodData.proteins}</p>
              <h3 className="h3 it">Salt:</h3><p className="p faint">{foodData.salt}</p>
              <h3 className="h3 it">Fats:</h3><p className="p faint">{foodData.fats}</p>
              <h3 className="h3 it">Saturated Fats:</h3><p className="p faint">{foodData.satFats}</p>
              <h3 className="h3 it">Sugars:</h3><p className="p faint">{foodData.sugars}</p>
            </div></>}
            <h3 className="h2" style={{ marginTop: '20px' }}>Allergens:</h3>
            <ul className="allergen_list">
              {foodData.allergId.map((allergen) => (
                <li key={allergen} className="tag h3">{allergen.name}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default ItemPage;
