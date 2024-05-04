import React, { useState } from "react";
import UserForm from "./UserForm";
const DisplayData = (props)=>{
    const [data,SetData] = useState([]);
    const [displayError,SetdisplayError] = useState(false);
    const [AgedisplayError,SetAgedisplayError] = useState(false);

    const dataHandle=(record)=>{
        if(record.Name==='' || record.Age==='' ){
            SetdisplayError(true)
            SetAgedisplayError(false)
        }
        else if(record.Age<=0){
            SetAgedisplayError(true);
            SetdisplayError(false);
        }
         else{   
        SetData((prevdata)=>{
        return [...prevdata,record]
      })
         SetdisplayError(false)
         SetAgedisplayError(false)
        }
    }
    const deleteHandler = (keyToDelete) => {
        const upDatedList = data.filter(item =>item.OurKey !== keyToDelete);
        SetData(upDatedList)
    };
    
    return(
       <div  style={{margin:'100px'}}>
        <UserForm onGetData={dataHandle}/>
        <h2>Data</h2>
        <div>
       {displayError  ? (<p>Please Enter Valid Data</p>):( 
        AgedisplayError?(<p>Enter Valid Age</p>):(
      data.length>0 ?(
        data.map((Datavalue)=>(
           
            <p  key={Datavalue.OurKey} onClick={()=>deleteHandler(Datavalue.OurKey)} >{Datavalue.Name}   ({Datavalue.Age} years of age)</p>
           )

        )
      ):<p>No Data Found</p>
     ))} </div>
    

       </div> 
)
}
export default DisplayData;