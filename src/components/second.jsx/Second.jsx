import React from 'react'
import data from '../../utils/slider.json'
import './Second.css'

function Second() {
  return (
    <>
      <div className="second">
        <div className="leftbar">
          <h1>SideBar</h1>
          <h3>check kar</h3>
            <label htmlFor="sidebar-label-container">
              <input type="radio" name='test' />
              <span className='checkmark'>Hello</span>
            </label>
            <label htmlFor="sidebar-label-container">
              <input type="radio" name='test' />
              <span className='checkmark'>Hello</span>
            </label>
            <label htmlFor="sidebar-label-container">
              <input type="radio" name='test' />
              <span className='checkmark'>Hello</span>
            </label>
            <label htmlFor="sidebar-label-container">
              <input type="radio" name='test' />
              <span className='checkmark'>Hello</span>
            </label>
            <label htmlFor="sidebar-label-container">
              <input type="radio" name='test' />
              <span className='checkmark'>Hello</span>
            </label>
            <label htmlFor="sidebar-label-container">
              <input type="radio" name='test' />
              <span className='checkmark'>Hello</span>
            </label>
            <label htmlFor="sidebar-label-container">
              <input type="radio" name='test' />
              <span className='checkmark'>Hello</span>
            </label>
        </div>

        <div className="right-section">

        {data.map((card,i)=>(
          // eslint-disable-next-line react/jsx-key
          <div className="cards">
            <img src={card.image} alt="home" />
            <h1>{card.price}</h1>
            <h2>{card.name}</h2>
            <p>{card.detail}</p>
          </div>
          ))
          }

        </div>

      </div>
    </>
  )
}

export default Second
