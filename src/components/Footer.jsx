import React from 'react'

function Footer({ mode }) {
    return (
        <>
            <footer className={`bg-${mode} text-${mode == "light" ? "dark" : "light"} p-3 mx-auto w-100 d-flex justify-content-around align-items-center`}>
                <p>
                    © Srijan Shankar Dubey | {new Date().getUTCFullYear()}
                </p>

            </footer>
        </>
    )
}

export default Footer
