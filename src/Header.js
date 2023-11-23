import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Example</h1>
      <Link to="/">Home</Link> | 
       <Link to="/page">Another Page</Link>
    </div>
  );
};

export default Header;
