import { createElement, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function AppContact(props){

    const [formsData,updateFromsData] = useState({name:"",number:""})
    const  [img,updateImg] = useState(null)
    const goBack = useNavigate()
    
    // let imageStyle = {background: "#bec7d4"}
    // let imageStyle2  = {backgroundImage : `url(${img})`,backgroundSize: "cover"}
    function handleChange(e){
        updateFromsData((prevForm)=>{
            return {
                ...prevForm,
                [e.target.name] : e.target.value
            }
        })
    }
    
    function checkForm(){
        if(!(formsData.name)){
            window.alert("please enter Name")
        }
        else if(!(formsData.number)){
            window.alert("please enter Number")
        }
        else{
            props.addContact(formsData);
            goBack('/')
        }
    }

    // const handleImageUpload = (e) => {        
    //    updateImg(URL.createObjectURL(e.target.files[0]))
    // };
      
    
    
      
    return (

       <div className="addContactMain">
            <div className="top ">
                <Link className="Link" to="/" ><i className="fa-solid fa-xmark"></i></Link>
                <h4>Create Contact</h4>
                <input type="button" value="Save" onClick={checkForm}/>
            </div>
            
            <form >
                {/* <input type="file" style={{display: "none"}} id="actual-btn" name="img" accept="image/*" onChange={handleImageUpload}/>
                <div className="photo">
                    <label className="addPhoto" style={img == null? imageStyle : imageStyle2}  htmlFor="actual-btn"><i className="fa-regular fa-image"></i></label>
                    <p>add picture</p>
                    
                </div> */}

                <div className="feild-holder">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={handleChange} value={formsData.name} required/>
                </div>

                <div className="feild-holder">
                    <label htmlFor="number">Phone</label>
                    <input type="number" id="number" name="number" onChange={handleChange} value={formsData.number} required/>
                </div>

            </form>
        </div>
    )
}