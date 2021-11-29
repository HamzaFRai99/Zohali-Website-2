import React from 'react'
import Vid from './images/zohali_intro_web.mp4'

function ZohaliVideo() {
    return (
            <div className='background-video-container'>
                <video autoPlay muted className='home-background-video'> <source src={Vid} type='video/mp4' /></video>
            </div>
    )
}

export default ZohaliVideo
