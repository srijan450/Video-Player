import React, { useEffect, useState } from 'react'
import Player from './Player';

function Sidebar({ setvideolink }) {
    const [prevChoice, setprevChoice] = useState(["No Data Found"]);

    useEffect(() => {
        setprevChoice(localStorage.getItem('choiceArr') ? JSON.parse(localStorage.getItem('choiceArr')) : ["No Data Found"])
        // console.log(localStorage.getItem('data')['choiceArr']);
    }, JSON.parse(localStorage.getItem('choiceArr')))

    return (
        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Some Previous Choices</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
                <ul style={{ listStyle: 'none' }} className="d-grid">
                    {/* {
                        prevChoice.map((items) => {
                            return (<li onClick={() => {
                                setvideolink(items);
                            }}>{items}</li>)
                        })
                    } */}
                </ul>
            </div>
        </div>

    )
}

export default Sidebar
