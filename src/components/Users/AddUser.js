import React, { useState } from 'react';

import Card from '../UI/Card';

import classes from './AddUser.module.css';

import Button from '../UI/Button';

const AddUser = (props) => {
   const [enteredUserename, setEnteredUsername] = useState(``);
   const [enteredAge, setEnteredAge] = useState(``);
   const addUserHandler = (e) => {
      e.preventDefault();
      if (
         enteredUserename.trimEnd().length === 0 ||
         enteredAge.trim().length === 0
      ) {
         return;
      }
      if (+enteredAge < 1) {
         return;
      }
      setEnteredAge(``);
      setEnteredUsername(``);
      console.log(enteredUserename, enteredAge);
   };

   const usernameChangeHandler = (e) => {
      setEnteredUsername(e.target.value);
   };
   const ageChangeHandler = (e) => {
      setEnteredAge(e.target.value);
   };
   return (
      <Card className={classes.input}>
         <form className={classes.input} onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
               id="username"
               type="text"
               value={enteredUserename}
               onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
               id="age"
               type="number"
               value={enteredAge}
               onChange={ageChangeHandler}
            />
            <Button type="submit">Add User</Button>
         </form>
      </Card>
   );
};

export default AddUser;
