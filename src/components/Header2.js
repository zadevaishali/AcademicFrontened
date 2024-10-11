import React from "react";//{useState,useEffect,useContext}
import {Link} from "react-router-dom";
const Header2=({username})=>{
return(<div className="topnav">
    {username ? (
<div>
 <p>Welcome, {username}!</p>
 <button className={"active"} >Logout</button>
</div>
) : (
<div>
 <Link to={"/login"}><button className={"active"}>Login</button></Link>
</div>
)}
 {/* <a class="active" onClick={this.handleLogout}>Logout</a>
 <a href="#username">UserName</a> */}
 <div className="search-container">
     <form action="/action_page.php">
         <input type="text" placeholder="Search.." name="search"/>
             <button type="submit">Search</button>
     </form>
 </div>
</div>);
}
export default Header2;