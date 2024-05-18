import axios from 'axios';
import React, { useEffect, useState } from 'react'

//---------------------------------------------------
//  Hay que estableces si se hace un metodo get a la api para recibir
//  todos los diferentes alergenos o si se hace la busqeuda desde e front sin acceder a la api
//---------------------------------------------------
export default function allergensSec({ formData, handleChange }) {

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (query.length > 2) {
            axios.get(`http://localhost:3000/allergens/search?query=${query}`)
                .then(response => {
                    setSuggestions(response.data);
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
        handleChange({ target: { name: 'allergyId', value: [...formData.allergyId, suggestion._id] } });
        setQuery('');
        setSuggestions([]);
    };
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
        </>
    )
}


