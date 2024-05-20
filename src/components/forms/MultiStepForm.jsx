import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PersonalInfoSec from './PersonalInfoSec';
import EmerInfoSec from './EmerInfoSec';
import AllergenSec from './AllergensSec';
import { FormProvider, useForm } from 'react-hook-form';

export default function multiStepForm() {


    const methods = useForm({

        defaultValues: {
            "name": "rick",
            "mail": "j.ramos23232@gmail.com",
            "pass": "1234",
            "allergyId": [],
            "telf": "999999999",
            "emerName": "j",
            "emerTelf": "555555555",
            "emerEmail": "dwkd@gmail.com",
            "history": [],
            "img": "",
            "role": "user"
        }
    })

    const [step, setStep] = useState(0);
    const [imagePreview, setImagePreview] = useState()

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);


    const onSubmit = async (data) => {
        console.log(data);  // Verifica que los datos sean correctos aquí
        try {
            const res = await axios.post('http://localhost:3000/auth/register', data);
            console.log(res.data);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };


    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setImagePreview(reader.result);
    //             methods.setValue('img', reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //     } else {
    //         setImagePreview();
    //     }
    // };

    const loadFile = function (event) {
        const output = document.getElementById('output');
        setImagePreview(URL.createObjectURL(event.target.files[0]));

    };


    const renderStep = () => {
        switch (step) {
            case 0:
                return <PersonalInfoSec loadFile={loadFile} imagePreview={imagePreview} />;
            case 1:
                return <EmerInfoSec />;
            case 2:
                return <AllergenSec />;
            // case 3:
            //   return <Review {...methods} />;
            default:
                return <PersonalInfoSec loadFile={loadFile} imagePreview={imagePreview} />;
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
