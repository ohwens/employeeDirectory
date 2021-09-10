import React from "react";

function EmployeeCard(props) {
    return (

        <tr>
   
            <td className="images">
                <img src={props.image}></img>
            </td>
            <td className="title-name">
                {props.title} 
                {props.first} 
                {props.last}
            </td>
            <td className="age">
                {props.age}
            </td>
            <td className="phone">
                {props.phone}
            </td>
            <td className="email">
                {props.email}
            </td>
        </tr>
  

    );
};

export default EmployeeCard;