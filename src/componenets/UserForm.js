import React, {useState} from "react";



const UserForm=(props) => {
const[Name,setName]= useState('');
const[Age,setAge]= useState('');
const formhandler = (event)=>{
    event.preventDefault();
   
    let data={
      OurKey:Math.random().toString(),
      Name:Name,
      Age:Age
    }
    props.onGetData(data);
    setName('');
    setAge('')
    }

const namehandler = (event)=>{
  setName(event.target.value);
}
const agehandler = (event)=>{
  setAge(event.target.value);
}


return (
    <div >
        <form onSubmit={formhandler}>
            <div>
                <label htmlFor="name">
                 UserName: 
                </label> <br/>
                <input type="text" value={Name} id="name" onChange={namehandler} />
            </div>
            <div>
                <label htmlFor="age">
                 Age(Year): 
                </label><br/>
                <input type="number" value={Age} id="age" onChange={agehandler} />
            </div>
            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
       
    </div>
);
};
export default UserForm;