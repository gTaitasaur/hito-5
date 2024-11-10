import './Navbar.css';

const Navbar = () => {
    const total = 25000;
    const token = false;
  
    return (
      <nav className='navDiv'>
        <div className="navLeft">
          <span>Pizzería Mamma Mía!</span>
          <button>🍕 Home</button>
          {token ? (
            <>
              <button>🔓 Profile</button>
              <button>🔒 Logout</button>
            </>
          ) : (
            <>
              <button>🔐 Login</button>
              <button>🔐 Register</button>
            </>
          )}
        </div>
        <div className="navRight">
          <button className="total">🛒 Total: ${total.toLocaleString()}</button>
        </div>
        
        
      </nav>
    );
  };
  
  export default Navbar;
  