import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form';

//---------------------------------------------------
//  Hay que estableces si se hace un metodo get a la api para recibir
//  todos los diferentes alergenos o si se hace la busqeuda desde e front sin acceder a la api
//---------------------------------------------------
let selectedAllergens = []
export default function allergensSec() {
    const { getValues, setValue, register, formState: { errors } } = useFormContext();

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedAllergens, setSelectedAllergens] = useState([]);

    //---------------------------------------------------
    //  crear metodo para filtrar allergens desde back que filtre por nombre y que no tenga en cuenta ni mayusculas etc(mirar como hacer si es posible que sea buscador predictivo)
    //  Cambiar path del metodo en linea 21 por el nuevo metodo que creemos.
    //---------------------------------------------------


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
        debugger
        selectedAllergens.push(suggestion.name)
        setQuery('');
        setSuggestions([]);
    };
    // const handleSuggestionClick = (suggestion) => {

    //     // const isAlreadySelected = selectedAllergens.some((allergen) => allergen._id === suggestion._id);
    //     // if (isAlreadySelected) {
    //     //     return;
    //     // }

    //     // Agregamos el alérgeno seleccionado al estado de alérgenos seleccionados
    //     setSelectedAllergens([...selectedAllergens, suggestion]);

    //     // Agregamos el ObjectID del alérgeno al campo allergyId utilizando setValue de react-hook-form
    //     const currentAllergies = getValues('allergyId');
    //     setValue('allergyId', [...currentAllergies, suggestion._id]);
    // }
    return (
        <>
            <h2>Select Allergens</h2>
            <input
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
            {/* <p>{selectedAllergens[0]}</p> */}
            {
                selectedAllergens.map((allergen, id) => (
                    <span key={id}><p>{allergen}</p></span>
                ))
            }


        </>
    )
}


