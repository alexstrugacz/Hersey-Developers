import { useEffect, useState } from "react";

import * as React from "react"
import NavbarTitle from "./NavbarTitle";

const NavbarScroll: React.FC<React.PropsWithChildren<{}>> = (props) => {
    const [isTransparent, setIsTransparent] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const location = window.scrollY;
            const show = location < 100;
            if (show) {
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }
        };
        handleScroll()
        document.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={"relative"}>
            <NavbarTitle
                transparent={isTransparent}
            />
            <div className={"z-1"}>
                {props.children}
            </div>
        </div>
    );
}
export default NavbarScroll;