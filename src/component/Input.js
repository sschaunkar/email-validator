import React, { useState } from 'react'
import validator from 'validator'
import axios from 'axios';

function Input() {
    const [emailError, setEmailError] = useState('');
    const [isValid, setValid] = useState(false);
    const [email, setEmail] = useState('');
    const validateEmail = (e) => {
        var email = e.target.value;
        setEmail(email);
        if (validator.isEmail(email)) {
            setEmailError('Email is valid')
            setValid(true);
        } else {
            setEmailError('Enter valid Email!')
            setValid(false);

        }
    }
    const validateGlobal = (e) => {
        e.preventDefault();
        axios.get(`https://api.trumail.io/v2/lookups/json?email=${email}`).then(data => {
            console.log(data);
            if (data.hostExist) {
                setEmailError('Email is valid')
                setValid(true);
            } else {
                setEmailError('Enter valid Email!')
                setValid(false);

            }
        }).catch(err => {
            console.log(err.message)
        })
    }


    return (
        <div>
            <input type='text' name="useremail" onChange={(e) => validateEmail(e)} value={email} />
            <p style={{ color: isValid ? 'green' : 'red' }}>{emailError}</p>
            <button onClick={(e) => validateGlobal(e)}>Validate Email through TrueAPI</button>
        </div>
    )

}

export default Input



//