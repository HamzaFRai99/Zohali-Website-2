import React from 'react'
import './HomeStyles.css'



function HomeContent() {


    return (
        <div className='page-background-color'>
            <div className='container-Home'>

                <div className='home-page-content'>

                    <div className='left-text-container '>

                        <h1>  Welcome to <a className='zohali-channel-link' href="https://www.youtube.com/channel/UCc6EALoPCY97mtYnfmFqCtA/videos"><span>Zohali-99</span></a> Website  </h1>

                        <div className='paragraph-left-text-container '>
                            <p> <a className='zohali-channel-link-in-paragraph' href="https://www.youtube.com/channel/UCc6EALoPCY97mtYnfmFqCtA/videos">Zohali-99</a>
                                is a channel on <a className='zohali-channel-link-in-paragraph' href="https://www.youtube.com">YouTube</a> talking about video games & technology.</p>

                            <p> You can buy video games , devices and many things through  <a to='/store' exact className='storeLink-home'>Zohali Store.</a> </p>

                            <p> Now , you can browse the latest News that related in Video Games and Technology very easily from  <a to='/store' exact className='storeLink-home'>Zohali News.</a></p>


                        </div>

                    </div>

                </div></div></div>

        



    )
}

export default HomeContent
