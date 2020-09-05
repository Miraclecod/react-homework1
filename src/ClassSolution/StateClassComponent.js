import React from "react";

import FormComponent from "../components/FormComponent";
import {InfoClassComponent} from "./InfoClassComponent";
import InfoUserFunctionalComponent from "../functionalSolution/InfoUserFunctionalComponent";

export class StateClassComponent extends React.Component{
    
    constructor(props) {
        super(props);
            this.state = {};
    }  

    createUser = (user) => {
        this.setState(user);
    }

    render() {
        return (
            <>
            <FormComponent createUser={this.createUser} />
            <InfoClassComponent user={this.state} />
            </>
        );
    }
}