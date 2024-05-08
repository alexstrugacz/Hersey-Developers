import React from 'react'

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "rgb(0, 0, 0, 0.9)" }} className="footer">
            <div className="container text-start">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2 className="logo font-bold">D214 <span style={{ color: "#c00c2c" }}>Developers</span></h2>
                        <div className="contact flex flex-col gap-1">
                            <span>District 214 Illinois</span>
                            <span>aalchikhibrahim6522@stu.d214.org</span>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </footer>

    )
}

export default Footer