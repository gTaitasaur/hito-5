import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navDiv">
      <div className="navLeft">
        <span>Pizzería Mamma Mía!</span>
        
        {/* Link to Home */}
        <Link to="/">
          <button>🍕 Home</button>
        </Link>
        
        {token ? (
          <>
            {/* Link to Profile if logged in */}
            <Link to="/profile">
              <button>🔓 Profile</button>
            </Link>
            <button>🔒 Logout</button> {/* Placeholder for Logout functionality */}
          </>
        ) : (
          <>
            {/* Link to Login if not logged in */}
            <Link to="/login">
              <button>🔐 Login</button>
            </Link>
            {/* Link to Register if not logged in */}
            <Link to="/register">
              <button>🔐 Register</button>
            </Link>
          </>
        )}
      </div>
      
      <div className="navRight">
        {/* Link to Cart with total amount */}
        <Link to="/cart">
          <button className="total">🛒 Total: ${total.toLocaleString()}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
