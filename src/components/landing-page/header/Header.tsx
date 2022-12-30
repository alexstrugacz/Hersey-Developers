import React from "react"
import Background from "./Background";
import NavbarScroll from "./NavbarScroll";
import NavbarTitle from "./NavbarTitle"

const Header: React.FC<{}> = () => {
    return (
        <div>
            <NavbarScroll>
                <Background />
            </NavbarScroll>
        </div>
    )
}

export default Header;