import { useState } from "react";
import { Link } from "react-router-dom";
export default function ContactsList(props){
   
    const userPic = props.imgUrl == "" ? props.name[0].toUpperCase()   : "../images/"+ props.imgUrl + ".webp"
    const style = {
        backgroundColor: props.pfpColor
    }
    const style2 ={
        backgroundImage: `url(${userPic})`,
        backgroundSize: `cover`
    }
    return(
        <div className="contact" id={props.id}>
            {props.imgUrl == "" ?  <span className="userPic"  style={style}>{userPic}</span> : <span className="userPic"  style={style2}></span> }
            <p><Link to={`/${props.id}` } >{props.name}</Link></p>
        </div>
    )
    
}