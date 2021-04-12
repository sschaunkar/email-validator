import React, { useState } from 'react'
import validator from 'validator'

function Input() {

    const [emailError, setEmailError] = useState('')
    const [isValid, setValid] = useState(false);
    const validateEmail = (e) => {
        var email = e.target.value;

        if (validator.isEmail(email)) {
            setEmailError('Email is valid')
            setValid(true);
        } else {
            setEmailError('Enter valid Email!')
            setValid(false);
        }
    }
    return (
        <div>
            <input type='text' name="useremail" onChange={(e) => validateEmail(e)}></input>
            <p style={{ color: isValid ? 'green' : 'red' }}>{emailError}</p>
        </div>
    )

}

export default Input
