import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1> Workout Training</h1>
      <nav className={"layout"}>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/workout">workout dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
