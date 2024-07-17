import './MultiStepForm.scss'

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PersonalInfoSec from './PersonalInfoSec';
import EmerInfoSec from './EmerInfoSec';
import AllergenSec from './AllergensSec';
import RegisterReview from './RegisterReview';
import { FormProvider, useForm } from 'react-hook-form';
import Header from '../Header/Header';

export default function MultiStepForm() {


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

    const loadFile = function (event) {
        const output = document.getElementById('output');
        setImagePreview(URL.createObjectURL(event.target.files[0]));

    };

    const [showAlert, setShowAlert] = useState(false);

    const alert = () => {
        setShowAlert(true)
        console.log('alertado');
        setTimeout(() => {
            setShowAlert(false)
        }, 5000);
    }


    const renderStep = () => {
        switch (step) {
            case 0:
                return <PersonalInfoSec loadFile={loadFile} imagePreview={imagePreview} />;
            case 1:
                return <EmerInfoSec />;
            case 2:
                return <AllergenSec />;
            case 3:
                return <RegisterReview />;
            // default:
            //     return <PersonalInfoSec loadFile={loadFile} imagePreview={imagePreview} />;
        }
    };
    return (
        <>
            <Header/>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className='container'>
                    {renderStep()}
                    <div className='form_button'>

                        {step < 3 ? (
                            <button type="button" onClick={nextStep} className='btt h3'>Next</button>
                        ) : (
                            <button type="submit" className='btt h3' onClick={alert}>Submit</button>
                        )}
                        {step > 0 && <button type="button" onClick={prevStep} className='btt h3'>Back</button>}
                    </div>
                </form>
            </FormProvider>
            {showAlert && (
                <div className="alertado">
                <p className='h2'>This is a test, currently no new users can be created, please use the test user. </p> <p  className='h2'>Thank you for your understanding.</p>
                </div>
            )}
        </>
    )
}
