import React, { useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import axios from "axios";
import AllergensSec from "../forms/AllergensSec.jsx";
import { Link } from "react-router-dom";

export default function EditProfile({ setEditable, onEdit }) {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggesFiltered, setSuggesFiltered] = useState([]);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      mail: user.mail,
      allergyId: user.allergyId,
    },
  });
  useEffect(() => {
    for (let index = 0; index < user.allergyId.length; index++) {
      axios
        .get(`http://localhost:3000/allergens/${user.allergyId[index]}`)
        .then((response) => {
          setSuggestions((suggestions) => [...suggestions, response.data.data]);
        });
    }
  }, []);
  useEffect(() => {
    if (query.length > 2) {
      axios
        .get(`http://localhost:3000/allergens/search/${query}`)
        .then((response) => {
          debugger;
          setSuggesFiltered(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching allergen suggestions:", error);
        });
    } else {
      setSuggesFiltered([]);
    }
  }, [query]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    const currentAllergies = getValues("allergyId") || [];
    setValue("allergyId", [...currentAllergies, suggestion._id]);
    setSuggestions((suggestions) => [...suggestions, suggestion]);
    setQuery("");
    setSuggesFiltered([]);
  };

  const handleRemoveAllergen = (indexToRemove) => {
    const updatedAllergens = suggestions.filter(
      (allergen, index) => allergen._id !== indexToRemove
    );
    // debugger;
    setSuggestions(updatedAllergens);
    setValue("allergyId", updatedAllergens);
  };

  const saveEdits = async (data) => {
    try {
      console.log(register);
      // debugger
      const response = await axios.put(
        `http://localhost:3000/users/${user._id}`,
        data
      );
      // localStorage.removeItem('userInfo');
      localStorage.setItem("userInfo", JSON.stringify(response.data.data));
      setEditable(false);
      onEdit();
    } catch (error) {
      console.error("There was an error updating the user!", error);
    }
  };
  return (
    <>
      <section className="profile container" id="profile">
        <header className='header'>
        <Link to='/' className=''><span className="material-symbols-rounded icon link">close</span></Link>
        <a onClick={() => {
              setEditable(false);
            }}
            className='btt_txt_smol h3'>&lt; Go Back</a>

      </header>
        <form onSubmit={handleSubmit(saveEdits)} className="container">
          <h2 className="h1 danger profile_head mg-b-20">
            Hello {user.name},<br /> What's the news?
          </h2>
          <img
            className="img-r"
            src="src\assets\powerpuff-girls-heart-8zj177vy22iogq90.jpg"
            alt=""
          />
          <h2 className="h2 profile_head mg-b-20">Profile info:</h2>
          <div className="profile_info">
            {/* <h3 className='h2'>Name: </h3><input className='p-b'>{user.name}</p> */}
            <label>
              <input
                className="input"
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder={user.name}
              />
              {/* {errors.name && <span>{errors.name.message}</span>} */}
            </label>
            {/* <h3 className='h2'>Mail: </h3><p className='p-b'>{user.mail}</p> */}
            <label>
              <input
                className="input"
                type="email"
                {...register("mail", { required: "Email is required" })}
                placeholder={user.mail}
              />
              {/* {errors.mail && <span>{errors.mail.message}</span>} */}
            </label>
            <h3 className="h2">Pal since: </h3>
            <p className="p-b">{user.regDate.substring(0, 10)}</p>
          </div>
          <div className="profile_allergies">
            <p className="h3">
              Marked items will be identified in your searches as hazardous to
              your health.
            </p>
            <input
              className="input"
              type="text"
              placeholder="Search for allergens"
              value={query}
              onChange={handleQueryChange}
            />

            <h2 className="h2 profile_allergies_head mg-b-20">Allergies:</h2>
            <ul>
              {suggesFiltered.map((suggestion) => (
                <li key={suggestion._id}>
                  <p>hola</p>
                  <span
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="tag_alt span"
                  >
                    {" "}
                    {suggestion.name}
                  </span>
                </li>
              ))}
            </ul>

            {suggestions.map((allergen, index) => (
              <li key={index}>
                <span className="tag_alt span mg-b-10">
                  {allergen.name}
                  <button
                    type="button"
                    onClick={() => handleRemoveAllergen(allergen._id)}
                    className="no_bg"
                  >
                    <span className="material-symbols-rounded icon_btt link">
                      close
                    </span>
                  </button>
                </span>
              </li>
            ))}
          </div>
          <div className="profile_emerInfo">
            <p className="h3">Need to change your emergency contact info?</p>
            <label>
              <input
                className="input"
                type="text"
                {...register("name", { required: "Their name is required" })}
                placeholder={user.emerName}
              />
              {/* {errors.name && <span>{errors.name.message}</span>} */}
            </label>
            <label>
              <input
                className="input"
                type="email"
                {...register("mail", { required: "Their email is required" })}
                placeholder={user.emerEmail}
              />
              {/* {errors.mail && <span>{errors.mail.message}</span>} */}
            </label>
            <label>
              <input
                className="input"
                type="text"
                {...register("emerTelf", {
                  required: "Their telephone is required",
                })}
                placeholder={user.emerTelf}
              />
              {/* {errors.emerTelf && <span>{errors.emerTelf.message}</span>} */}
            </label>
          </div>

          <button className="btt_txt h2" type="submit">
            Save
          </button>
        </form>
      </section>
    </>
  );
}
