import { useState,useEffect } from "react";
import SerchBar from "../componenets/serchBar";
import ContactsList from "../componenets/contactsList";
import { Link } from "react-router-dom";

export default function ContactsMain(props){
    

    const [contacts,setContacts] = useState(props.data) // decalring contacts state, initialised as data form data.js
    const pfpColors = ["#5ab974","#af5cf7","#fcc935","#ff63b8","#4ecde6"]// set of pfpColors
    const [serchInput,setSerchInput] = useState("")

    // sorting props data to get it alloted to the contact state
    contacts.sort((a, b) => {
        let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
    
        if (fa > fb) {
            return 1;
        }
        if (fa < fb) {
            return -1;
        }
        else {
            return 0;
        }
    
      })
    const contactList = contacts.map( contact => <ContactsList {...contact} key={contact.id}/>) // mapping contacts state to a contactList component

   
    // to match the serch input to the contacts data stored (serching contacts)
    function handleSerch(event){
       
        let serch = event.target.value;
        setSerchInput(serch)
        if(serch === ""){                //if serch bar is empty then display all contacts and return
           return setContacts(props.data)   
        }

        var serchData = props.data;   
       
       if( !parseInt(serch)){

            var result = serchData.filter(contact =>{      //filtering contacts that matches the serch input value 

                for(let i=0;i<contact.name.length;i++){
                    if(contact.name[i].toLowerCase() === serch[0].toLowerCase()){
                        var name = contact.name.slice(i,i+(serch.length)).toLowerCase()
                        return name === serch.toLowerCase()
                    }
                }
            
            })
            
            setContacts(result)
       }

       else if(typeof parseInt(serch) == "number") {
         var result = serchData.filter(contact =>{
            var number = contact.number.toString() ;
            for(let i=0;i<number.length;i++){
                if(number[i] === serch[0]){
                    var checkNumber = number.slice(i,i+(serch.length))
                    return checkNumber === serch
                }
            }
         })

         setContacts(result)
       }


        
       
    }
    
    return(
        <div className="contactMain" >
            <SerchBar onSerch={handleSerch} value={serchInput}/>
            <div className="contacts">
               {contactList}
            </div>
            <Link className='Link addContact' to="/addContact" >
                <i className="fa-solid fa-plus"></i>
            </Link> 
        </div>
    )
}