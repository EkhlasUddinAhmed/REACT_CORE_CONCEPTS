import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  let subjectProperty=[

    { subjectName:"COMPANY ACT :1994", subjectPrice:"5000 Taka", subjectCode:"SubjectCode:100"},
    { subjectName:"CONTRACT  ACT:1882", subjectPrice:"4000 Taka", subjectCode:"SubjectCode:150"},
    { subjectName:"PARTNARSHIP :ACT 1990", subjectPrice:"3500 Taka", subjectCode:"SubjectCode:120"},
    { subjectName:"SALES OF GOODS ACT:1994", subjectPrice:"4500 Taka", subjectCode:"SubjectCode:560"},
    { subjectName:"SPECIFIC RELIEF ACT 1872", subjectPrice:"2500 Taka", subjectCode:"SubjectCode:990"},
    { subjectName:"Civil Procedure Code 1908", subjectPrice:"3500 Taka", subjectCode:"SubjectCode:500"}
    ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
         {/* <SubjectsComponent singleSubject={subjectProperty[0]}></SubjectsComponent>
         <SubjectsComponent singleSubject={subjectProperty[1]}></SubjectsComponent>
         <SubjectsComponent singleSubject={subjectProperty[2]}></SubjectsComponent>
         <SubjectsComponent singleSubject={subjectProperty[3]}></SubjectsComponent>
         <SubjectsComponent singleSubject={subjectProperty[4]}></SubjectsComponent> */}

        {

          subjectProperty.map(singleSubjectTaken=>
            <SubjectsComponent singleSubject={singleSubjectTaken}></SubjectsComponent>
          )
        }
        <Users></Users>

      </header>
    </div>
  );
}

function NameComponent(props){

  var designNameComponent={
    color:'blue',
    border:'5px solid yellow',
    borderRadius:'10px',
    margin:'10px',
    padding:'10px',
    width:'800px',
    backgroundColor:"lightgray"
    }


  return (
    <div style={designNameComponent}>
          <h1>{props.studentName}</h1>
          <h3>{props.mobileNO}</h3>
    </div>
  )
}

function SubjectsComponent(props){

  var designNameComponent={
    color:'blue',
    border:'5px solid yellow',
    borderRadius:'10px',
    margin:'10px',
    padding:'10px',
    width:'800px',
    backgroundColor:"lightgray"
    }

    var btnStyle={
    margin:"10px",
    padding:"10px",
    width:"300px",
    color:"blue"
  }
 const {subjectName,subjectPrice,subjectCode}=props.singleSubject;
  
console.log("From SUBJECT PROPS:",props);
  return(
    <div style={designNameComponent}>
          
         <h1>{subjectName}</h1>
         <h3>{subjectPrice}</h3>
         <h5>{subjectCode}</h5>
         <button style={btnStyle}>Details Content</button>
         <button style={btnStyle}>Buy Now</button>
    </div>
  )
}

function Counter(){
 const [Count, setCount]=useState(0);
 //const handleIncrease=()=>setCount(count+1);
   
  
 
  return(
    <div>
         <h1>Count:{Count}</h1>
         <button onClick={()=>setCount(Count+1)}>IncreaseCount</button>
         <button onClick={()=>setCount(Count-1)}>DereaseCount</button>
    </div>
  )
}

function Users(){
 const [users,setUsers]=useState([]);
 useEffect(()=>{
   
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=>response.json())
   .then(data=>{
     setUsers(data);
     
   });
 },[]);



  return(
       <div>
         <h3>Users Name from Jason PlaceHolder</h3>
         <ul>
           {
             users.map(singleUser=><li>{singleUser.name}/{singleUser.email}</li>)
           }
         </ul>

         <ul>
              {
                users.map(singleUser=><li>{singleUser.email}</li>)
              }
          </ul>

          <ul>
              {
                users.map(singleUser=><li>{singleUser.phone}</li>)
              }
          </ul>

      </div>


  )

}

export default App;
