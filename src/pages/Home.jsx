import { Link } from "react-router-dom";
import './home.css'

function Home() {
  return (
    <div className="main">
      <h1 className="title">UNICORNS APP</h1>
      <nav className="nav">
        <ul className="ul">
          <li className="li">
            <Link className="link" to="/unicorns">
              Get unicorns
            </Link>
          </li>
          <li className="li">
            <Link className="link" to="/create-unicorn">
              Create Unicorn
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
