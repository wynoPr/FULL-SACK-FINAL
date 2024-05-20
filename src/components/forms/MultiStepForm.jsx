import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PersonalInfoSec from './PersonalInfoSec';
import EmerInfoSec from './EmerInfoSec';
import AllergenSec from './AllergensSec';
import { FormProvider, useForm } from 'react-hook-form';

export default function multiStepForm() {


    const methods = useForm({
        defaultValues: {
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
            "role": "user"
        }
    })
    // });

    const [step, setStep] = useState(0);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };





    //--------------------------------------------------
    //Revisar funcionamiento, Funcion escrita por CHATGPT
    //--------------------------------------------------
    // const handleFileChange = async (e) => {
    //     const file = e.target.files[0];
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     formData.append('upload_preset', 'your_upload_preset'); // Reemplaza 'your_upload_preset' con tu propio preset de Cloudinary

    //     try {
    //         const res = await axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData);
    //         setFormData({ ...formData, img: res.data.secure_url });
    //     } catch (error) {
    //         console.error('Error uploading the image', error);
    //     }
    // };




    const onSubmit = async (data) => {
        console.log(data);  // Verifica que los datos sean correctos aquí
        try {
            const res = await axios.post('http://localhost:3000/auth/register', data);
            console.log(res.data);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };



    const renderStep = () => {
        switch (step) {
            case 0:
                return <PersonalInfoSec />;
            case 1:
                return <EmerInfoSec />;
            case 2:
                return <AllergenSec />;
            // case 3:
            //   return <Review {...methods} />;
            default:
                return <PersonalInfoSec />;
        }
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {renderStep()}
                <div>
                    {step > 0 && <button type="button" onClick={prevStep}>Back</button>}
                    {step < 3 ? (
                        <button type="button" onClick={nextStep}>Next</button>
                    ) : (
                        <button type="submit">Submit</button>
                    )}
                </div>
            </form>
        </FormProvider>
    )
}
