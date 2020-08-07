import React, { ChangeEvent, FormEvent, useState } from 'react';

export interface formData{
    firstName: string;
    lastName: string;
    company: string;
    email: string;
}

export interface requestResult {
    success:boolean;
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
    const validateFirstName = (value: string):string => {
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
        if (firstNameValidationError === "" && lastNameValidationError === "" && companyValidationError === "" &&  emailValidationError === "") {
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
            <div>
                Request a Demo
            </div>

            <div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" value={firstName} onChange={handleFirstNameChange} />
                <span className="error">{firstNameError}</span>
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" value={lastName} onChange={handleLastNameChange} />
                <span className="error">{lastNameError}</span>
            </div>

            <div>
                <label htmlFor="company">Company</label>
                <input id="company" value={company} onChange={handleCompanyChange}/>
                <span className="error">{companyError}</span>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input id="email" value={email} onChange={handleEmailChange}/>
                <span className="error">{emailError}</span>
            </div>

            <div>
            <button type="submit" disabled={submitted && submitResult.success}>
                Submit
            </button>
            </div>
            {/*{*/}
            {/*    submitted && (*/}
            {/*        <div>*/}
            {/*        <span className={submitResult.success ? "submit-success" : "submit-failure"}>*/}
            {/*            {submitResult.message}*/}
            {/*        </span>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*};*/}

        </form>
    );
}

export default Form;

// the following code should be added to the App.tsx file

/*
const handleOnSubmit(data: formData) {
    console.info("formData", data);
    return {
        message: "Your request has been successfully sent!",
        success: true
    };
}
*/