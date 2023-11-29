import React from 'react'
import './services.css'

import ui from './../assets/ui.png'
import wp from './../assets/wp.png'
import RE from './../assets/react.png'

const Services = () => {
  return (
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
            <p>Web design: Harmonizing aesthetics and functionality for captivating, user-centric digital experiences.</p>
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
            <p>React: Dynamic, reusable components for seamless, efficient web interfaces.</p>
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
            <p>WordPress: Versatile platform for creating and managing impactful websites effortlessly.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services