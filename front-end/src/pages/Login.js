import { useContext } from "react";
import AuthContext from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
    if(loginUser(username,password)) {
      navigate('/home')
    }
  };

  return (
    <section className="app">
      <form onSubmit={handleSubmit} className="mx-4 pb-4 pt-1">
        <div className="todo-item my-4">
                  <h1>Login </h1>
        </div>
        <hr />
        <div className="flex items-center justify-center">
          <div className="mb-4">
            <input type="text" id="username" placeholder="Enter Username" />
            <label className="px-4" htmlFor="username">Username</label>
          </div>
          <div className="mb-4">
            <input type="password" id="password" placeholder="Enter Password" />
            <label className="px-4" htmlFor="password">Password</label>
          </div>
          <button className="" type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;