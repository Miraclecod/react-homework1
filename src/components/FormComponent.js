import React, { useState } from "react";

const FormComponent = (props) => {

    const initialState = {
        FIO: '',
        email: '',
        phone: '',
        address: ''
    }

    const [user, setUser] = useState(initialState);

    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        console.log(user);
        props.createUser(user);
    } 

    return (
        <form>
            <input type="text" name="FIO" placeholder="ФИО" onChange={handleOnChange} /><br />
            <input type="text" name="email" placeholder="Email" onChange={handleOnChange} /><br />
            <input type="text" name="phone" placeholder="телефон" onChange={handleOnChange} /><br />
            <input type="text" name="address" placeholder="адрес" onChange={handleOnChange} /><br />
            <button onClick={handleOnClick}>добавить</button>
        </form>
    );
}

export default FormComponent;