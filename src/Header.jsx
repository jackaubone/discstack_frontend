import { Link } from "react-router-dom";
import {LogoutLink} from "./LogoutLink";



export function Header() {

  return (
    <header>
      <nav>
        <Link to="/">Home</Link> 

        <Link to="/login">  Login </Link>
        <LogoutLink/>

        <Link to="/users"> Users </Link>
        <Link to="/lists"> Lists </Link>
      </nav>
    </header>
  );
}