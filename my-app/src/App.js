import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Contact} from "./components/Contact";
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './services/UserService'

function App() {

  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState(0)


  const userCreate = (e) => {

      createUser(user)
        .then(response => {
          console.log(response);
          window.location.reload();
          setNumberOfUsers(numberOfUsers+1)
      });
  }

  const fetchAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }

  useEffect(() => {
    getAllUsers()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }, [])

  const onChangeForm = (e) => {
    console.log(e.target.value);
    if(e.target.id=="resume"){
      user.image = e.target.files[0];
    }else{
      user.event = e.target.value;
    }
      console.log(user);
      setUser(user)
  }
  
    
    return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={  <div className="App">
      <Header></Header>
      <img src="https://i.ibb.co/hXLmpYh/banner.jpg" style={{width: "100%"}}/>
      <div className="container mrgnbtm">

      </div>
      <div className="row mrgnbtm" style={{backgroundImage: 'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}}>
        <Users users={users}></Users>
      </div>
      <button style={{marginLeft:"900px",marginTop: "20px"}} onClick={() => window.location.replace("./add")}>Add Event</button>
    
    </div>}>
        
      </Route>
      <Route path="/add" element={<div>
        <Header></Header>
        
          <div className="col-md-8">
              <CreateUser 
                user={user}
                onChangeForm={onChangeForm}
                createUser={userCreate}
                >
              </CreateUser>
          </div>
          <div className="row mrgnbtm" style={{backgroundImage: 'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}}>
        <Users users={users}></Users>
        
      </div>
      
        </div>}></Route>
        <Route path="*" element={<Contact />} />
    </Routes>

  </BrowserRouter>
    );
}

export default App;
