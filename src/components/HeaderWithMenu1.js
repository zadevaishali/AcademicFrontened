import React, { Component } from "react";
import Menu from "./StudentMenu";
import Header from "./Header";

class HeaderWithMenu1 extends Component {
    render() {
        const { username } = this.props;
        return (
            
             <div>
                {/* <HeaderWithMenu1 username="vaishali" /> */}

              <Header username={username} />
              <Menu />
            </div>   //JSX equivalent
            
            
               //React.createElement("div", {},
               // React.createElement(Header, { username: username }), React.createElement(Menu)) 

        );

    }
}

export default HeaderWithMenu1;