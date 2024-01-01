import { useState } from 'react'
import './App.css'
import EditContact from './pages/editContact'
import ContactsMain from './pages/contactsMain'
import ContactDetails from './pages/ContactDetails'
import {Routes, Route, Link, useResolvedPath, useMatch} from 'react-router-dom'
import data from "./data"
import AddContact from './pages/addContact'
import DailPad from './pages/DailPad'
function App() {
  
  // addcontact function
  function  addContact(formsData){
        const pfpColors = ["#5ab974","#af5cf7","#fcc935","#ff63b8","#4ecde6"]// set of pfpColors
        const pfpColor = pfpColors[Math.floor(Math.random()* pfpColors.length)] // setting pfp color
        data.push({
          id : data.length + 1,
          name: formsData.name,
          number: parseInt(formsData.number),
          imgUrl: "",
          pfpColor: pfpColor
        })
        
  }


  //delete contact function
  function deleteContact(contactId){
    data.forEach((d,i)=>{
      if(d.id == contactId){
        delete data[i];
      }
    })
  }

//Edit contact function
function editContact(fromsData,i){
  
  data[i].number = parseInt(fromsData.number)
  data[i].name = fromsData.name
}
console.log(data);
  return (
    <main>
      <div className="display">
        <Routes>
          <Route path="/" element={<ContactsMain data={data}/>}/>
          <Route path="/dail" element={<DailPad/>}/>
          <Route path="/addContact" element={<AddContact {...data} addContact={(fromsData) => addContact(fromsData)}/>}/>
          <Route path="/:contactId" element={<ContactDetails data={data} deleteContact={(contactId) => deleteContact(contactId)}/>} />
          <Route path='/:contactId/edit' element={<EditContact data={data} editContact={(fromsData,i) => editContact(fromsData,i)}/>}></Route>
        </Routes>
        
        <nav>
          <ul>
            <CustomLink className='Link' to="/dail"><i className="fa-solid fa-phone"></i></CustomLink>
            <CustomLink className='Link' to="/history" ><i className="fa-solid fa-clock-rotate-left"></i></CustomLink>
            <CustomLink className='Link' to="/"><i className="fa-solid fa-address-book"></i></CustomLink>
          </ul>
        </nav>
      </div>
    </main>
  )
}

function CustomLink(props){
  const resolvedPath =  useResolvedPath(props.to);
  const isActive =useMatch({path: resolvedPath.pathname, end: true})
  return(
    <Link className={isActive ? "Link active" : "Link"} to={props.to}>{props.children}</Link>
  )

}


export default App
