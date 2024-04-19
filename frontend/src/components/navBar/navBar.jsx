import React from 'react'

function navBar(props) {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">{props.title}</a>
            </nav>
        </>
    )
}

export default navBar