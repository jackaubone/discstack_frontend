import { useState } from "react";
import { Link } from "react-router-dom";
import {LogoutLink} from "./LogoutLink";


export function Header() {

  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
  setIsSignupVisible(true);
  };
  const handleSignupClose = () => {
   setIsSignupVisible(false);
  };

  return (
    <header>
      
      <nav className="navbar d-flex justify-content-start navbar-light bg-light">

          <div className="navbar-brand">
          <Link className="nav-item" to="/">Home</Link> 
          </div>
          <div className="navbar-brand">
          <Link className="nav-item" to="/users"> Users </Link>
          </div>
          <div className="navbar-brand">
          <Link className="nav-item"to="/lists"> Lists </Link>
          </div>

        <div className="d-flex justify-content-end">
      {localStorage.jwt === undefined ? (
               <>
                 <div className="navbar-brand">
                   <Link className="nav-item" to="/signup" onClick={handleSignupShow}>
                     Signup
                   </Link>
                 </div>
                 <div className="navbar-brand">
                   <Link className="nav-item" to="/login">
                     Login
                   </Link>
                 </div>
               </>
             ) : (
              
              <div className="d-flex justify-content-end">
                <div className="navbar-brand">
               <div className="nav-item ">
                 <LogoutLink />
               </div>
               </div>
               <div className="navbar-brand">
                <Link className="nav-item" to="/profile"> Profile </Link>
               </div>
               </div>
             )}
        </div>
            
      </nav>
    </header>
  );
}