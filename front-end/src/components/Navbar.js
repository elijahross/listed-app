import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../components/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav>
      <div className="navbar header">
        <h1>App Name</h1>
        <div>
          {user ? (
            <>
              <Link className="px-4 link-text cursor-pointer" to='/home'>To-Do</Link>
              <Link className="px-4 link-text cursor-pointer" to='' onClick={logoutUser}>Logout</Link>
            </>
          ) : (
            <>
              <Link className="px-2 link-text" to="/login">Login</Link>
              <Link className="px-2 link-text" to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;