import React, { useEffect, useState } from 'react'
import './HistoryCard.scss'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
const database = "http://localhost:3000/";

export default function HistoryCard({ item }) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [userAllergens, setUserAllergens] = useState([]);
  const code = item.code;
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
    // console.log('foodData:', foodData);

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

  return (
    <>
      {item && <Link to={`/item/${item.code}`} className='historyCard link'>
        {matchingAllergies.length ?
          <img className='img_s invalid' src={item.img} alt={item.name} />
          :
          <img className='img_s valid' src={item.img} alt={item.name} />}
        <div className='historyCard_info'>
          <h3 className='h3 mg-b-10'>{item.name}</h3>
        </div>
        <div className='historyCard_info_list'>
          {item.ing.map((ing, i) =>

            (<span key={i} className='tag span mg-b-10'>{ing}</span>)
          )}
        </div>
        {/* <button className='close'><span className="material-symbols-rounded icon link">close</span></button> */}
      </Link>}
    </>
  )
}
