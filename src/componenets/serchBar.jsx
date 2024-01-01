
export default function SerchBar(props){

   

    return(
        <input className="serchBar" placeholder="Serch Contacts" onChange={props.onSerch} id="serch"  value={props.value}/>
        
    )
}