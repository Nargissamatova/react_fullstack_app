import React from "react";
import { useState } from "react";

const CreateUser = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <h2>Create User</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <label htmlFor="">Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        <br />
        <label htmlFor="">Mobile:</label>
        <input type="text" name="mobile" onChange={handleChange} />
        <br />
        <button>Save</button>
      </form>
    </div>
  );
};

export default CreateUser;
