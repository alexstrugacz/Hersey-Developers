import React from "react"
import Background from "./Background";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header: React.FC<{}> = () => {
    return (
        <div>
            <Background />
            <Navbar />
            {/* <Hero /> */}
        </div>
    )
}

export default Header;