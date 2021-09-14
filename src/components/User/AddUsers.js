import React,{useState} from 'react';
import Button from '../Ui/Button';
import Card from '../Ui/Card'; 
import ErrorModal from '../Ui/ErrorModal';
import './AddUsers.css'

const AddUsers = props =>{
 const [enteredUsername, setEnteredusername] = useState('');
 const [enteredAge, setAge] = useState('');
 const [error, setError] = useState();

 const addUserHandler = (event) =>{
      event.preventDefault();
      if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
        setError({
            title:'Invalid input',
            message: 'Please enter a valid name  and age (non-empty values).'
        });
        return;
      }  
      if(+enteredAge < 1) {
        setError({
            title:'Invalid age',
            message: 'Please enter a valid age (> 0).'
        });
          return ;
      }
     props.onAddUser(enteredUsername,enteredAge);
      setEnteredusername('');
      setAge('');
  }
  
  const usernameChangeHandler = (event) =>{
   setEnteredusername(event.target.value);
  }; 

  const ageChangeHandler = (event) => {
      setAge(event.target.value);
  };

  const errorHandler = () =>{
      setError(null);
  }
  return(
      <>
    {error && <ErrorModal  title={error.title} message={error.message} onConfirm={errorHandler}/> }
    <Card className="input  ">
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text"  onChange={usernameChangeHandler} value={enteredUsername}/>
        <label htmlFor="age">Age(Years)</label>
        <input is ="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </>
    );
    
};

export default AddUsers;