import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NotFound from "../componenets/notFound";

 export default function ContactDetails(props){
    const params =  useParams()
    const contactData = getId();
    const goBack = useNavigate()

    // setting userpic css
   
       
    //deletion code
    function confrimDeletion(){
       if(confirm("Are you sure ?")){
            props.deleteContact(params.contactId)
            goBack('/')
       }
    }
    
   return(
       contactData != null ? <FoundId/> : <NotFound/>
    )

   

    function FoundId(){
        const style = contactData.imgUrl == "" ? {background:contactData.pfpColor}   : {background: `url("../images/${contactData.imgUrl}.webp")`,backgroundSize: "cover"}
        const userpic =  <span className="userPic" style={style}> {contactData.imgUrl == "" ? contactData.name[0].toUpperCase(): ""} </span>
 
        return(
            <div className="contactDetailsMain" style={{background:"black"}}>
                <div className="top ">
                    <Link className="Link" to="/" ><i className="fa-solid fa-arrow-left"></i></Link>
                    <Link className="Link edit" to={`/${params.contactId}/edit`} ><i className="fa-solid fa-pen"></i></Link>
                    <span className="delete" onClick={confrimDeletion}><i className="fa-solid fa-trash"></i></span>
                </div>
                <div className="details">
                    {userpic}
                    <h5 className="userName">{contactData.name}</h5>
                    <div className="userNumbers">
                        <p style={{fontSize:'15px'}}>Contact info</p>
                        <h5 className="userNumber">
                            <a href={`tel:+91${contactData.number}`}><i className="fa-solid fa-phone"></i></a>
                            <p className="number">{contactData.number}</p>
                            <a className="whatsapp" href={`https://wa.me/91${contactData.number}`} target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                        </h5>
                    </div>
                </div>
            </div>
        )
    }

    // serch id as per the site url
    function getId(){
        let c =  null
        props.data.forEach((d)=>{
            if(d.id == params.contactId){
                c = d;
            }
        })
        return c;
    }
}

