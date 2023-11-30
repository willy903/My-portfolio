import React from 'react'
import './services.css'

import ui from './../assets/ui.png'
import wp from './../assets/wp.png'
import RE from './../assets/react.png'

const Services = () => {
  return (
    <div className="container-service">
    <div className='services' id='services'>
      <div className='item1'>
        <h4>Services</h4>
        <p>I provide wide range of digital services</p>
        <div className="dividerTop"></div>
      </div>
      <div className="item2">
        <div className="card">
          <div className="top">
              <div className='circle circle1'>
                <img src={ui} alt="" width={'40px'} height={'40px'} />
              </div>
          </div>
          <div className="corp">
            <h1>Web design</h1>
            <p>Web design blends aesthetics, usability, and functionality, creating visually appealing, user-friendly digital experiences that resonate with target audiences and deliver optimal results.</p>
          </div>
        </div>
        <div className="card">
          <div className="top">
              <div className='circle circle2'>
                <img src={RE} alt="" width={'40px'} height={'40px'} />
              </div>
          </div>
          <div className="corp">
            <h1>Web Site</h1>
            <p>A website is a digital gateway, presenting information and services attractively, ensuring a seamless user experience and achieving specific business objectives effectively.</p>
          </div>
        </div>
        <div className="card">
          <div className="top">
              <div className='circle circle3'>
                <img src={wp} alt="" width={'40px'} height={'40px'} />
              </div>
          </div>
          <div className="corp">
            <h1>CMS</h1>
            <p>WordPress CMS empowers easy content management, versatile customization, and efficient site development, making it a go-to solution for dynamic websites.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services