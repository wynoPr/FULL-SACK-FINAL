import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form';

//---------------------------------------------------
//  Hay que estableces si se hace un metodo get a la api para recibir
//  todos los diferentes alergenos o si se hace la busqeuda desde e front sin acceder a la api
//---------------------------------------------------
let selectedAllergens = []
export default function AllergensSec() {
    const { getValues, setValue, register, formState: { errors } } = useFormContext();

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedAllergens, setSelectedAllergens] = useState([]);


    useEffect(() => {
        if (query.length > 2) {
            axios.get(`http://localhost:3000/allergens/search/${query}`)
                .then(response => {
                    setSuggestions(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching allergen suggestions:', error);
                });
        } else {
            setSuggestions([]);
        }
    }, [query]);

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        const currentAllergies = getValues('allergyId');
        setValue('allergyId', [...currentAllergies, suggestion._id]);
        selectedAllergens.push(suggestion.name)
        setQuery('');
        setSuggestions([]);
    };

    const handleRemoveAllergen = (indexToRemove) => {
        setSelectedAllergens(selectedAllergens.filter((_, id) => id !== indexToRemove));
    };

    return (
        <>
            <h2 className='h1 danger form_title'>now select your allergies or intolerances</h2>
            <p className='h3'>marked items will be identified in your searches as hazardous to your health.</p>
            <input className='input'
                type="text"
                placeholder="Search for allergens"
                value={query}
                onChange={handleQueryChange}
            />
            <ul>
                {suggestions.map(suggestion => (
                    <li key={suggestion._id} onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion.name}
                    </li>
                ))}
            </ul>
            {
                selectedAllergens.map((allergen, id) => (
                    <span key={id}><p>{allergen}</p>
                        <button onClick={() => handleRemoveAllergen(id)}>Remove</button>
                    </span>
                ))
            }


        </>
    )
}


