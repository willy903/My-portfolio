import React from 'react'
import './services.css'
import arrowPrev from './../assets/arrow-prev.png'
import arrowNext from './../assets/arrow-next.png'
import ui from './../assets/ui.png'

const Services = () => {
  return (
    <div className='services'>
      <div className='item1'>
        <h4>Services</h4>
        <p>I provide wide range of digital services</p>
        <button className='confArrow confArrow1'><img src={arrowPrev} width={'30px'} height={'auto'} alt="" /> </button>
        <button className='confArrow '><img src={arrowNext} width={'30px'} height={'auto'} alt="" /> </button>
      </div>
      <div className="item2">
        <div className="card">
          <div className="top">
              <div className='circle'>
                <img src={ui} alt="" width={'40px'} height={'40px'} />
              </div>
          </div>
          <div className="corp">
            <h1>Web design</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div className="card">
          <div className="top">
              <div className='circle'>
                <img src={ui} alt="" width={'40px'} height={'40px'} />
              </div>
          </div>
          <div className="corp">
            <h1>Web design</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div className="card">
          <div className="top">
              <div className='circle'>
                <img src={ui} alt="" width={'40px'} height={'40px'} />
              </div>
          </div>
          <div className="corp">
            <h1>Web design</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div className="card">
          <div className="top">
              <div className='circle'>
                <img src={ui} alt="" width={'40px'} height={'40px'} />
              </div>
          </div>
          <div className="corp">
            <h1>Web design</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services