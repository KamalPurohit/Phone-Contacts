import { useState } from "react";
import { useNavigate , Link, useParams} from "react-router-dom";



export default function EditContact(props){
    const params = useParams();
    let index = 0
    const contact = getId();
    const [formsData,updateFromsData] = useState({name:`${contact.name}`,number:contact.number})
    const goBack = useNavigate()
    
    
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
            props.editContact(formsData,index);
            goBack('/')
        }
    }

    return(
        <div className="addContactMain">
            <div className="top ">
                <Link className="Link" to="/" ><i className="fa-solid fa-xmark"></i></Link>
                <h4>Edit Contact</h4>
                <input type="button" value="Save" onClick={checkForm}/>
            </div>
            
            <form >
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

    function getId(){
        let c =  {}
            props.data.forEach((d,i)=>{
            if(d.id == params.contactId){
                c = d;
                index = i;
            }
        })
        return c;
    }
}


