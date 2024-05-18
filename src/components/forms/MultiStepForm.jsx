import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PersonalInfoSec from './PersonalInfoSec';
import EmerInfoSec from './EmerInfoSec';
import AllergenSec from './AllergensSec';

export default function multiStepForm() {
    const [formData, setFormData] = useState({

        "name": "",
        "mail": "",
        "pass": "",
        "allergyId": [],
        "telf": "",
        "emerName": "",
        "emerTelf": "",
        "emerEmail": "",
        "history": [],
        "img": "",
        "role": ""

    });

    const [step, setStep] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    useEffect(() => {
        console.log(formData)
    }, [formData])




    //--------------------------------------------------
    //Reviar funcionamiento, Funcion escrita por CHATGPT
    //--------------------------------------------------
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'your_upload_preset'); // Reemplaza 'your_upload_preset' con tu propio preset de Cloudinary

        try {
            const res = await axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData);
            setFormData({ ...formData, img: res.data.secure_url });
        } catch (error) {
            console.error('Error uploading the image', error);
        }
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/auth/register', formData);
            console.log(res.data);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const renderStep = () => {
        switch (step) {
            case 0:
                return <PersonalInfoSec formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} />;
            case 1:
                return <EmerInfoSec formData={formData} handleChange={handleChange} />;
            case 2:
                return <AllergenSec formData={formData} handleChange={handleChange} />;
            case 3:
            // return <Review formData={formData} />;
            default:
                return <PersonalInfoSec formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} />;
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                {renderStep()}
                <div>
                    {step > 0 && <button type="button" onClick={prevStep}>Back</button>}
                    {step < 2 ? (
                        <button type="button" onClick={nextStep}>Next</button>
                    ) : (
                        <button type="submit">Submit</button>
                    )}
                </div>
            </form>
        </>
    )
}
