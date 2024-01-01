import { useState } from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="contactDetailsMain" style={{background:"black"}}>
            <div className="top ">
                <Link className="Link" to="/" ><i className="fa-solid fa-arrow-left"></i></Link>
            </div>
            <div className="details">
                <h5 className="userName">Page Not Found</h5>
            </div>
        </div>
    )
}