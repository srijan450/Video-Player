import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({ mode, setmode }) {
    const [active, setactive] = useState({ home: "active" })

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`} id="top">
                <div className="container">
                    <a className="navbar-brand fs-3" href="/">Video Player</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item fs-5">
                                <Link className={`nav-link ${active.home}`} onClick={() => setactive({ home: "active" })} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item fs-5">
                                <Link className={`nav-link ${active.about}`} aria-current="page" to="/about" onClick={() => setactive({ about: "active" })}>About</Link>
                            </li>

                            <li className="nav-item fs-5">
                                <a className="nav-link" aria-current="page" onClick={() => setmode(mode == "light" ? "dark" : "light")}>{mode == "light" ? "Dark" : "Light"} Mode</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
