import { NavLink } from "react-router-dom";
//import headerLogo from "../assets/header-logo.svg"

function Nav({ user }) {
  const authenticatedOptions = (
    <>
      <NavLink className="nav-link" to="/interests">
        Interests
      </NavLink>
      <NavLink className="nav-link" to="/interests/add">
        Post
      </NavLink>
      <NavLink className="nav-link" to="/sign-out">
        Log Out
      </NavLink>
    </>
  );
  console.log(user)

  const unauthenticatedOptions = (
    <>
      <NavLink className="nav-link" to="/">
        Log-In
      </NavLink>
      <NavLink className="nav-link" to="/register">
        Register
      </NavLink>
    </>
  );

  return (
    <nav>
      
      {user && <div className="link welcome">Welcome, {user.username}</div>}
      <div className="nav-links">
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </nav>
  );
}

export default Nav;