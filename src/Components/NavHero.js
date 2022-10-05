import React, { useState, } from 'react'
import { useInView } from 'react-intersection-observer';
import Swal from 'sweetalert2';

const Hamburguer = "/images/icon-hamburger.svg"
const Cross = "/images/icon-close.svg"


const NavHero = ({ footView, alert }) => {

    const { ref, inView } = useInView({
        rootMargin: '-150px',
    });

    function double(a) {
        setExpanded(!expanded)
        if (a) {
            alert2()
        } else {
            alert()
        }
    }
    function alert2() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Work in progress...',
        })
    }

    const [expanded, setExpanded] = useState(false)


    return (
        <>
            <div className='NavHero'>
                <div className='Nav flex apart'>
                    <div><img src="/images/logo-light.png" alt="spaceImg" /></div>
                    <img src={expanded ? Cross : Hamburguer} className={`burguer ${expanded ? "" : "wobble-ver-right"}`} alt="icon2" onClick={() => setExpanded(!expanded)} />
                    <div className={`navbar flex  ${expanded ? "display" : "displaynone"}`}>
                        <div onClick={() => setExpanded(!expanded)} className='selected'>HOME</div>
                        <div onClick={() => double(true)}>BLOG(W.I.P)</div>
                        <div onClick={() => double(false)}>CONTACT(W.I.P)</div>
                    </div>
                </div>
                <div className='Hero'>
                    <div className='flex apart heroDuo'>
                        <div className='heroguy2 floatHover'> <img src="/images/hero-guy-2.png" className={""} alt="icon" /></div>
                        <div><img src="/images/hero-girl.png" className={"floatHover"} alt="icon" /></div>
                    </div>
                    <h1>We Are Paperpillar</h1>
                    <p>A team of passionate designers and developers from Yogyakarta</p>
                    <div className='fix' ref={ref}>
                        <div className='unfix'>

                            <div onClick={alert} className={`btn btnWhite  ${inView ? "" : "btntransformed"}  ${footView ? "infootview" : ""}`}>
                                {inView ? `LET'S TALK!` : <i className="far fa-envelope"></i>}
                            </div>

                        </div>
                    </div>
                    <div className='flex JflexEnd hero3 displaynonemobile'><img src="/images/hero-guy-3.png" alt="hero3" /></div>
                </div>
                <div className='actual-hero'><img className="hero-with-foot" src="images/Hero-with-foot2.png" alt="" /></div>
            </div>
        </>
    )
}

export default NavHero