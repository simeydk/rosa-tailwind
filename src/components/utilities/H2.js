import React from 'react'

export default function H2({ children, className, props }) {
    return <h2 id="rooms" className={"text-4xl my-16 uppercase " + className} {...props}>
        {children}
    </h2>
}