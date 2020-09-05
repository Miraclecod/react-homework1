import React from "react";

const InfoUserFunctionalComponent = (props) => {

    return (
        <div>
        <div>User Info, functional component with hooks</div>
        {
            // Object.values(props.user).map( (item, index) => {
            //     return <p>{item}</p>
            // })
            Object.entries(props.user).map( (item, index) => {
                return <p key={index}>{item[0] + ": " +  item[1]}</p>
            })
        }
        </div>
    );
}

export default InfoUserFunctionalComponent;