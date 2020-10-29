import React, { useState } from 'react'
import { alphaCheck, numericOnlyCheck, validPhoneCheck, validateEmail, validateAddress } from '../validations'

const initialForm = {
    name: '',
    gender: 'f',
    dob: '',
    phone: '',
    email: '',
    address: ''
}

export default function InsuranceForm() {
    const [errors, setErrors] = useState([])
    const [form, setForm] = useState(initialForm)

    function formSubmitHandler (e) {
        e.preventDefault();
        setErrors([])
        if (!alphaCheck(form.name)) {
            setErrors(prevErr => ([...prevErr, { field: 'name', message: 'Please enter only alphabets' }]))
            return
        } else if (!(form.name.length >= 2 && form.name.length <= 15)) {
            setErrors(prevErr => ([...prevErr, { field: 'name', message: 'Field Should be min 2 char and max 15 char' }]))
            return
        }

        if (!numericOnlyCheck(form.phone)) {
            setErrors(prevErr => ([...prevErr, { field: 'phone', message: 'Please enter only numbers' }]))
            return
        } else if (!validPhoneCheck(form.phone)) {
            setErrors(prevErr => ([...prevErr, { field: 'phone', message: 'Please valid Phone number' }]))
            return
        }

        if (!validateEmail(form.email)) {
            setErrors(prevErr => ([...prevErr, { field: 'email', message: 'Please enter valid Email' }]))
            return
        }

        if (!validateAddress(form.address)) {
            return setErrors(prevErr => ([...prevErr, { field: 'address', message: 'Please enter valid Address' }]))
        }

        if (!(form.address.length >= 15)) {
            return setErrors(prevErr => ([...prevErr, { field: 'address', message: 'Please enter less than 50 characters' }]))
        }

        alert('Form Submited Succesfully')
    }
    return (
        <div>
            { errors.length > 0 &&
            <ul>
                { errors.map(e => (<li key={e.field} >{e.message} in { e.field } field</li>)) }
            </ul>
            }
            <form onSubmit={formSubmitHandler}>
                <div>
                    <input className="input" type="text" value={form.name} onInput={(e) => setForm(prevForm => ({...prevForm, name: e.target.value}))} placeholder="Enter Name" />
                </div>
                <br />
                <div>
                    <input type="radio" id="male" onChange={ e => setForm(prevForm => ({ ...prevForm, gender: e.target.value })) } name="gender" value="m" />
                    <label for="male">Male</label><br />
                    <input type="radio" id="female" onChange={ e => setForm(prevForm => ({ ...prevForm, gender: e.target.value })) } name="gender" value="f" />
                    <label for="female">Female</label><br />
                    <input type="radio" id="other" onChange={ e => setForm(prevForm => ({ ...prevForm, gender: e.target.value })) } name="gender" value="o" />
                    <label for="other">Other</label>
                </div>
                <br />
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" onInput={ e => setForm(prevForm => ({ ...prevForm, dob: e.target.value })) } name="birthday" />
                <br />
                <input className="input"  type="phone" value={form.phone} onInput={(e) => setForm(prevForm => ({...prevForm, phone: e.target.value}))}  placeholder="Phone No" />
                <br />
                <input className="input"  type="email" placeholder="Email" value={form.email} onInput={(e) => setForm(prevForm => ({...prevForm, email: e.target.value}))} />
                <br />
                <textarea placeholder="Address" value={form.address} onInput={(e) => setForm(prevForm => ({...prevForm, address: e.target.value}))} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
