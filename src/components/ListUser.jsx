import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost:8005/api/").then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  return <h1>ListUser</h1>;
};

export default ListUser;
