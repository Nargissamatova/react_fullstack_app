import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListUser from "./components/ListUser.jsx";
import CreateUser from "./components/CreateUser.jsx";

function App() {
  return (
    <div className="App">
      <h4>Full stack app</h4>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
