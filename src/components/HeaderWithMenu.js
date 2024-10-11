import React from "react";//{useState,useEffect,useContext}
import Header2 from "./Header2";
import Menu from "./StudentMenu";
import Dashboard from "./DashBoard";
const HeaderWithMenu=({username})=>{
    return(<>
    <Header2 username={username}/>
        <Menu/>
        {/* <Dashboard/> */}

        </>
    );
}
export default HeaderWithMenu;