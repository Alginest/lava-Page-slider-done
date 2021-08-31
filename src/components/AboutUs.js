import React, { useState } from 'react'
import '../index.css'
import { people } from '../data/slideData'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
const AboutUs = () => {
  const [value, setValue] = useState(0)
  const checkNumber = (number) => {
    let lastslide = people.length - 1
    if (number < 0) {
      return lastslide
    }
    if (number > lastslide) {
      return 0
    }
    return number
  }
  const nextSlide = () => {
    setValue((value) => {
      let newIndex = value + 1
      return checkNumber(newIndex)
    })
  }
  const prevSlide = () => {
    setValue((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const { stars, work, info, img, name } = people[value]
  return (
    <section className='about-us'>
      <div className='about-us-cont'>
        <div className='about-text'>
          <h3>
            What They Think <span>About Us</span>
          </h3>
          <p>
            Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod
            purus non, convallis odio. Donec vitae magna ornare, pellentesque ex
            vitae, aliquet urna.
          </p>
        </div>
        <div className='slider'>
          <div className='slider-person'>
            <div className='div-slider-card'>
              <img src={img} alt={name} />
              <p className='slider-star text-center'>{stars}</p>
              <h3 className='text-center'>{name}</h3>
              <p className='slider-person-info text-center'>{info}</p>
              <p className='slider-work text-center'>{work}</p>
            </div>
          </div>
          <div className='slider-buttons'>
            <button className='slider-button-left' onClick={prevSlide}>
              <FaAngleLeft />
            </button>
            <button className='slider-button-right' onClick={nextSlide}>
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
