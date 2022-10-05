import React from 'react'


const Content = () => {

  
    return (
        <div className='content'>
            <h2 className='margincenter textcenter playfairFont spacerBotLight'>What We Do</h2>
            <hr className='redhr'/>
            <div  className={`iconsgrid grid margincenter textcenter`}>

                <div >
                    <img className="icon-img margincenter" src="Images/Ui-ux-icon.png" alt="" />
                    <h3>UX/UI</h3>
                    <p>Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</p>
                </div>
                <div >
                    <img className="icon-img margincenter" src="Images/GHOSTY.png" alt="" />
                    <h3>Icon/ Illustration</h3>
                    <p>Character Design, Icon Set, Illustration Guide, Illustration Set</p>
                </div>
                <div >
                    <img className="icon-img margincenter" src="Images/third-icon.png" alt="" />
                    <h3>Branding</h3>
                    <p>Visual Identity, Stationary Kit, Marketing Materials</p>
                </div>
                <div >
                    <img className="icon-img margincenter" src="Images/4to-item.png" alt="" />
                    <h3>Development</h3>
                    <p>HTML/CSS, JavaScript Animation, WordPress, Responsive Website</p>
                </div>
                <div >
                    <img className="icon-img margincenter" src="Images/5to-icon.png" alt="" />
                    <h3>Motion</h3>
                    <p>2D Animation, UI Motion</p>
                </div>
                <div >
                    <img className="icon-img margincenter" src="Images/6to-icon.png" alt="" />
                    <h3>Photography</h3>
                    <p>Travel Photography, Product Photography</p>
                </div>
            </div>

            <h2 className='margincenter textcenter playfairFont spacerBotLight'>Clients</h2>
            <p className='margincenter textcenter loraFont spacerBotLight clientsP'>We’ve been working with teams around the world.</p>
            <hr className='redhr'/>

            <div className='clientsGrid flex margincenter'>

                <div className='dissmall'>
                    <div><img src="Images/teachable.png" alt="" /></div>
                </div>

                <div className='dissmall'>
                    <div><img src="Images/roger.png" alt="" /></div>
                    <div><img src="Images/grab.png" alt="" /></div>
                </div>

                <div>
                    <div className="displaysmall"><img src="Images/roger.png" alt="" /></div>

                    <div className='client2'><img src="Images/hoopsai.png" alt="" /></div>
                    <div className='client1'><img src="Images/agoda.png" alt="" /></div>
                    <div className='client2'><img src="Images/getsafe.png" alt="" /></div>

                    <div className="displaysmall"><img src="Images/grab.png" alt="" /></div>
                </div>

                 <div className='dissmall'>
                    <div><img src="Images/flyr.png" alt="" /></div>
                    <div><img src="Images/anyleads.png" alt="" /></div>
                </div>
                <div className='dissmall'>
                    <div><img src="Images/crisp.png" alt="" /></div>
                </div>



            </div>

        </div>
    )
}

export default Content