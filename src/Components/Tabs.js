import React from "react";
import './Style.css';


function Tabs({id,onTabClicked,className}){
    return(
        <div className={`tabs ${className}`} onClick={()=>onTabClicked(id)}></div>
    )
}
export default Tabs; 