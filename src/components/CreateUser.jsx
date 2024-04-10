import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8005/api/", inputs);
    //console.log(inputs);
    navigate("/"); // moves to diff page -> List user page
  };
  return (
    <div className="create-user-container">
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
