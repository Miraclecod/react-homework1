import React from "react";

export class InfoClassComponent extends React.Component{
    
    

    render() {
        console.log(this.props)
        return (
            <div>
            <div>User Info, class component</div>
            {
                // Object.values(props.user).map( (item, index) => {
                //     return <p>{item}</p>
                // })
                Object.entries(this.props.user).map( (item, index) => {
                    return <p key={index}>{item[0] + ": " +  item[1]}</p>
                })
            }
            </div>
        );
    }
}