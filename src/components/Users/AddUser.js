import React from 'react';

const AddUser = (props) => {
   const addUserHandler = (e) => {
      e.preventDefault();
   };
   return (
      <form onSubmit={addUserHandler}>
         <label htmlFor="username">Username</label>
         <input id="username" type="text" />
         <label htmlFor="username">Age (Years)</label>
         <input id="username" type="number" />
         <button type="submit">Add User</button>
      </form>
   );
};

export default AddUser;
