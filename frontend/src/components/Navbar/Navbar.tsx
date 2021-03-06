import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="flex space-x-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/wos">wos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
