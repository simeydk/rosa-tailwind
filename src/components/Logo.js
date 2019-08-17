import { Link } from "gatsby";
import React from "react";
export function Logo() {
    return (<Link to="/" className="flex items-center no-underline text-white">
        <img src='/images/rosa-logo.png' alt="Rosa B&B Logo" className="bg-white" style={{
                width: '200px',
                position: "absolute",
                top: "10px"
            }} />

        </Link>);
}
