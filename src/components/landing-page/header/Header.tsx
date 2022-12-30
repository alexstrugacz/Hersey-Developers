import React from "react"
import Background from "./Background";
import NavbarTitle from "./NavbarTitle"

const Header: React.FC<{}> = () => {
    return (
        <div>
            <Background />
            <NavbarTitle />
        </div>
    )
}

export default Header;