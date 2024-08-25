import { Link } from "react-router-dom";
import "./header.css";
function Header({ validation }) {
  return (
    <header>
      <nav className="nav-header">
        <div className="logo">
          <Link to="/">
            <img src="../../public/logo.png" alt="Logo React" />{" "}
          </Link>
        </div>
        {validation ? (
          <Link className="link-header" to="/create-unicorn">
            Create Unicorn
          </Link>
        ) : (
          <Link className="link-header" to="/" >Home</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
