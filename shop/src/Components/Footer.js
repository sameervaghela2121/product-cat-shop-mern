import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="bg-light text-center text-lg-start">
            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}} >
                © 2021 Copyright:
                <Link className="text-dark" to="">Sameer Vaghela</Link>
            </div>
            {/* <!-- Copyright --> */}
            </footer>
        </div>
    )
}

export default Footer
// "position":"fixed","bottom":"0","width":"100"
// style={{"backgroundColor": "rgba(0, 0, 0, 0.2)","margintop":"10px","bottom":"0"}}