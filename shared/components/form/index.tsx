import React, {ChangeEvent, FormEvent, useState} from 'react';
import style from './style.module.scss'

export interface FormData {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
}

export interface requestResult {
    success: boolean;
    message: string;
}

export const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [company, setCompany] = useState("");
    const [companyError, setCompanyError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [submitResult, setSubmitResult] = useState();
    const validateFirstName = (value: string): string => {
        const error = value ? "" : "You must enter your first name";
        setFirstNameError(error);
        return error;
    }

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        validateFirstName(e.currentTarget.value);
        setFirstName(e.currentTarget.value);
    }

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.currentTarget.value);
        validateLastName(e.currentTarget.value);
    }

    const validateLastName = (value: string): string => {
        const error = value ? "" : "You must enter your Last Name";
        setLastNameError(error);
        return error;
    }

    const handleCompanyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCompany(e.currentTarget.value);
        validateCompany(e.currentTarget.value);
    }

    const validateCompany = (value: string): string => {
        const error = value ? "" : "You must enter your Company Name";
        setCompanyError(error);
        return error;
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        validateEmail(e.currentTarget.value);
    }

    const validateEmail = (value: string): string => {
        const error = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
        )
            ? ""
            : "You must enter a valid email address";

        setEmailError(error);
        return error;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const firstNameValidationError = validateFirstName(firstName);
        const lastNameValidationError = validateLastName(lastName);
        const companyValidationError = validateCompany(company);
        const emailValidationError = validateEmail(email);
        if (firstNameValidationError === ("" || null) && lastNameValidationError === ("" || null)
            && companyValidationError === ("" || null) && emailValidationError === ("" || null)) {
            const result = {
                firstName,
                lastName,
                company,
                email
            };
            setSubmitResult(result);
            setSubmitted(true);
        }
    };
    return (
        <form noValidate={true} onSubmit={handleSubmit}>
            <div className={style.form_container}>
                <div className={style.demo}>
                    <p>
                        Request a Demo
                    </p>
                </div>
                <div className={`row`}>
                    <div className={`col-md-6 col-6 ${style.form_sub_title}`}>
                        <label className={style.label} htmlFor="firstName">First Name*</label>
                        <input className={style.input_field} id="firstName" value={firstName}
                               onChange={handleFirstNameChange} placeholder='Your First Name'/>
                        <span className="error">{firstNameError}</span>
                    </div>

                    <div className={`col-md-6 col-6 ${style.form_sub_title}`}>
                        <label className={style.label} htmlFor="lastName">Last Name*</label>
                        <input className={style.input_field} id="lastName" value={lastName}
                               onChange={handleLastNameChange} placeholder='Your Last Name'/>
                        <span className="error">{lastNameError}</span>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-md-12 col-12 ${style.form_sub_title}`}>
                        <label className={style.label} htmlFor="company">Company*</label>
                        <input className={style.input_field} id="company" value={company}
                               onChange={handleCompanyChange} placeholder='Name of your company'/>
                        <span className="error">{companyError}</span>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-md-12 col-12 ${style.form_sub_title}`}>
                        <label className={style.label} htmlFor="email">Email*</label>
                        <input className={style.input_field}
                               id="email" value={email} onChange={handleEmailChange}
                               placeholder='Your Email'
                        />
                        <span className="error">{emailError}</span>
                    </div>
                </div>

                <div className={style.button_container}>
                    <button className={style.button} type="submit" disabled={submitted && submitResult.success}>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;
