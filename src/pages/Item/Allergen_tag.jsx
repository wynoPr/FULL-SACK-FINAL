import React, { useState } from 'react'

export default function Allergen_tag({Aid}) {

    const [allergyName, setAllergyName] = useState('');

    const getDetailAllergens = (Aid) => {
        axios.get(`http://localhost:3000/allergens/${Aid}`)
            .then(response => {
                // Asume que la respuesta contiene un campo `data` con el nombre de la alergia
                setAllergyName(response.data);
            })
            .catch(error => {
                console.error('Error fetching allergen details:', error);
            });
    };

  return (
    <div className=' tag span'>{allergyName}</div>
  )
}
