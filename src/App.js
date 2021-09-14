import React,{useState} from'react';
import './App.css';
import AddUsers from './components/User/AddUsers';
import UsersList from './components/User/UsersList';


function App() {
  const [usersList,setUsersList] = useState([]);
  const addUserHandler = (uName,uAge) =>{
    setUsersList((prevUsersList)=>{
      return[...prevUsersList,{name: uName , age: uAge, id: Math.random().toString()}];
    });
  };
  return (
    <div >
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
