import React, { useState } from 'react'

function Controls({ setvideolink }) {
    const [err, seterr] = useState("Please Select A Video TO Play")

    return (
        <div className="container">
            <ul style={{
                listStyle:
                    'none'
            }} className="d-flex justify-content-between px-0 flex-wrap">
                <li className="text-danger fs-4 text-captilize text-center">{err ? err : ""}</li>
                <li className="btn voperations">
                    <label htmlFor="asujajjh">Select Video</label>
                    <input type="file" id="asujajjh" style={{ display: 'none' }} onChange={(e) => {
                        let [file] = e.target.files;
                        let type = file.type;
                        if (type === "video/ogg" || type === "video/webm" || type === "video/mp4") {
                            let url = URL.createObjectURL(file);
                            setvideolink(url);
                            seterr("");
                        }
                        else {
                            seterr("Invalid file: Please Select A !ideo File!")
                        }
                    }} accept="video/*" /></li>

            </ul>
        </div>
    )
}

export default Controls
