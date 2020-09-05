import React, { useState } from "react";

import FormComponent from "../components/FormComponent";
import InfoUserFunctionalComponent from "./InfoUserFunctionalComponent";

const StateComponent = () => {

    const [user, setUser] = useState({});

    const createUser = (user) => {
        setUser(user);
    }
    
    return (
        <>
        <FormComponent createUser={createUser} />
        <InfoUserFunctionalComponent user={user} />
        </>
    );
}

export default StateComponent;