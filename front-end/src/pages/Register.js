
import { useState, useContext } from "react";
import AuthContext from "../components/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
    <section className="app">
      <form onSubmit={handleSubmit} className="mx-4 pb-4 pt-1">
        <div className="todo-item my-4">
          <h1>Register</h1> 
        </div>
        <hr />
        <div className="flex items-center justify-center todo-item">
          <div className="mb-4">
          <input
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required/>             
            <label htmlFor="username">Username</label>
          </div>
          
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required/>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            type="password"
            id="confirm-password"
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm Password"
            required/>
          <label htmlFor="confirm-password">Confirm Password</label>
          <p className="text-rgb(32,32,32)">{password2 !== password ? "Passwords do not match" : ""}</p>
        </div>
        <button>Register</button>
      </form>
    </section>
  );
}

export default Register;