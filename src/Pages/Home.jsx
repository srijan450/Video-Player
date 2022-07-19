import React, { useState } from 'react'
import Controls from '../components/Controls'
import Player from '../components/Player'

function Home({ mode }) {
    const [videolink, setvideolink] = useState(null)
    return (
        <div className="my-auto">
            <Player src={videolink} mode={mode} />
            <Controls setvideolink={setvideolink} mode={mode} />

        </div>
    )
}

export default Home
