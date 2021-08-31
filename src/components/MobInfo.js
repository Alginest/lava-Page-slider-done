import React from 'react'
import '../index.css'
import phoneImg from '../images/left-image.png'
import { mobData } from '../data/aboutData'
const MobInfo = () => {
  return (
    <section className='mob-info'>
      <div className='container-blop'>
        <div className='mob-display'>
          <div className='mob-img-div'>
            <img src={phoneImg} alt='mobile-phone' />
          </div>
          <div className='mob-selectors'>
            {mobData.map((item, index) => {
              const { img, text, about } = item
              return (
                <div className='items-trio' key={index}>
                  <div className='img-diff'>
                    <img src={img} alt='image' />
                  </div>
                  <div className='items-text'>
                    <h2>{text}</h2>
                    <p>{about}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobInfo
