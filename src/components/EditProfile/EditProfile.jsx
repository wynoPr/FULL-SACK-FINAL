import React, { useEffect, useState } from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import axios from 'axios'
import AllergensSec from '../forms/AllergensSec.jsx'

export default function EditProfile({ allergyNames, setEditable }) {


    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedAllergens, setSelectedAllergens] = useState([]);
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm();


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
        const currentAllergies = getValues('allergyId') || [];
        setValue('allergyId', [...currentAllergies, suggestion._id]);
        selectedAllergens.push(suggestion.name)
        setQuery('');
        setSuggestions([]);
    };

    const handleRemoveAllergen = (indexToRemove) => {
        setSelectedAllergens(selectedAllergens.filter((_, id) => id !== indexToRemove));
    };



    const user = JSON.parse(localStorage.getItem('userInfo'));

    const saveEdits = async (register) => {
        try {
            console.log(register);
            const response = await axios.put(`http://localhost:3000/users/${user._id}`, register);
            setEditable(false)
            localStorage.removeItem('userInfo');
            localStorage.setItem('userInfo', JSON.stringify(response.data.data));
        } catch (error) {
            console.error('There was an error updating the user!', error);
        }
    }
    return (
        <>
            <section className='profile container' id='profile'>
                <form className='profile_edit' onSubmit={handleSubmit(saveEdits)}>
                    <h2 className='h1 danger profile_head mg-b-20'>Hello {user.name},<br /> What's the news?</h2>
                    <img className='img-r' src='src\assets\powerpuff-girls-heart-8zj177vy22iogq90.jpg' alt='' />
                    <h2 className='h2 profile_head mg-b-20'>Profile info:</h2>
                    <div className='profile_info'>
                        {/* <h3 className='h2'>Name: </h3><input className='p-b'>{user.name}</p> */}
                        <label>
                            <input className='input' type="text" {...register('name', { required: 'Name is required' })} placeholder={user.name} />
                            {/* {errors.name && <span>{errors.name.message}</span>} */}
                        </label>
                        {/* <h3 className='h2'>Mail: </h3><p className='p-b'>{user.mail}</p> */}
                        <label>
                            <input className='input' type="email" {...register('mail', { required: 'Email is required' })} placeholder={user.mail} />
                            {/* {errors.mail && <span>{errors.mail.message}</span>} */}
                        </label>
                        <h3 className='h2'>Pal since: </h3><p className='p-b'>{user.regDate.substring(0, 10)}</p>
                    </div>
                    <div className='profile_allergies'>

                        {/* <AllergensSec /> */}
                        <p className='h3 profile_allergies_disclaimer it'>Marked items will be identified in your searches as hazardous to your health.</p>
                        <input className='input mg-b-20'
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
                        <h2 className='h2 profile_allergies_head mg-b-20'>Allergies:</h2>
                        {/* {allergyNames.map((allergen, index) => (
                            <span key={index} className='tag_alt_danger span mg-b-10'>
                                {allergen}
                            </span>
                        ))} */}

                    </div>

                    <button className='btt h2' type="submit">Save</button>
                </form>

                {/* <button className='btt_txt h2' onClick{saveEdits}>save</button> */}
            </section>
        </>
    )
}
