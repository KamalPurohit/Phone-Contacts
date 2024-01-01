import { useState } from "react";
import ContactsList from "../componenets/contactsList";
import data from "../data";

export default function DailPad(){
    const [contacts,setContacts] = useState([])
    let contactList = contacts.map( contact => <ContactsList {...contact} key={contact.id}/>) 
    
    const [number, updateNumber] = useState(0);
    const dailarr = [1,2,3,4,5,6,7,8,9,"fa-phone",0,"fa-angle-down"]
    const dailpad = dailarr.map((d,i)=>{
            if(typeof d === "number"){
                return <button className="btn" key={d} name={d} id={d} onClick={handleClick}>{d}</button>
            }else{
                return <a className="btn extra-btn" href={`tel:+91${number}`} key={i+1} name={i+1} id={i+1}><i className={`fa-solid ${d}`}></i></a>
            }
       
        }
    )
    

    function handleClick(e) {
        let dailnumber = document.getElementById("dail")
        var old = dailnumber.value;
        dailnumber.value = old + e.target.name;
        updateNumber(dailnumber.value);
        serchContact(dailnumber.value);
    }

    function handleBackspace(){
        updateNumber((prev)=>{
            let result = Math.floor(prev / 10);
            serchContact(result ? result : "")
           return result ? result : ""
        })
        
    }

    function serchContact(serch){
        serch = serch.toString()
        if(serch == ''){
            setContacts([]);
        }

        let serchData = data;
        serchData = serchData.filter((contact)=>{
            var num = contact.number.toString() 
            for(let i=0;i<num.length;i++){
                if(num[i] ===  serch[0]){
                    if(serch == num.slice(i,i+(serch.length))){
                        return contact; 
                    }
                }   
            }
        })
        setContacts(serchData) 
    }

    function handleChange(e){
        updateNumber(e.target.value); 
        serchContact(e.target.value)       
    }
    
    return(
        <div className="dailpadMain"> 
            <div className="contacts">
               {contactList}
            </div>
            <div className="dailpad">
                <input type="number" name="number" id="dail" value={number} onChange={handleChange}/>
                <button className="btn backspace" onClick={handleBackspace}><i className="fa-solid fa-delete-left"></i></button>
                <div className="dail">
                    {dailpad}
                </div>
            </div>
        </div>
    )


    
}