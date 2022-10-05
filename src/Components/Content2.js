import React from 'react'


const Content2 = () => {

    return (
        <div className='Content2'>
            <h2 className='margincenter textcenter playfairFont spacerBotLight'>Our Latest Works</h2>
            <hr className='redhr' />

            <div className={`worksdiv grid grid2fr margincenter  `}>
                <div className='worktext flex'>
                    <div>
                        <h3>Redesigning Crisp.im</h3>
                        <p className='spacerTopLight montserrat'>Illustration, Web Design</p>
                    </div>
                    <div className='btnwork textcenter whiteT ' style={{ backgroundImage: "linear-gradient(135deg,#72e9f3 -20%,#404de6 120%)" }}>VIEW PROJECT</div>
                </div>
                <div className='workback grid gridConCenter'><img className='margincenter' src='images/crisp-works.png' alt="rocket" /></div>
            </div>


            <div className='worksdiv grid grid2fr margincenter spacerTop3'>
                <div className='worktext flex tentacleText'>
                    <div>
                        <h3>Beautiful Landing Page for Lifecycle</h3>
                        <p className='spacerTopLight montserrat'>Illustration, Web Design</p>
                    </div>
                    <div className='btnwork textcenter whiteT ' style={{ backgroundImage: "linear-gradient(225deg,#1ad4bb,#b2de94)" }}>VIEW PROJECT</div>
                </div>
                <div className='workback tentacle grid gridConCenter'><img className='margincenter' src='images/lifecycle-works.png' alt="tentacles" /></div>
            </div>


            <div className='worksdiv grid grid2fr margincenter spacerTop3' style={{ boxShadow: "0 5px 140px 0 rgba(130,136,171,.2)" }}>
                <div className='worktext flex'>
                    <div>
                        <h3>2018 Desk Calendar Inventor Edition</h3>
                        <p className='spacerTopLight montserrat'>Illustration, Product Design</p>
                    </div>
                    <div className='btnwork textcenter whiteT ' style={{ backgroundImage: "linear-gradient(135deg,#8254e5,#83afe3 150%)" }}>VIEW PROJECT</div>
                </div>
                <div className='workback calendar grid gridConCenter'></div>
            </div>
        </div>
    )
}

export default Content2