import React from 'react'
import "./contact.css"

export const Contact = () => {
  return (
    <div className='Contact'>
      <div className="ContactImage">
        <img src="https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className="ContactPage">
        <div className="ContactHeading">
          <h1>Contact Us</h1>
        </div>
        <label htmlFor="">enter your name</label><br />
        <input type="text" className='ContactInput' placeholder='enter your name' /><br /><br />
        <label htmlFor="">enter your last name</label><br />
        <input type="text" className='ContactInput' placeholder='enter your lastname' /><br /><br />
        <label htmlFor="">enter your email</label><br />
        <input type="text" className='ContactInput' placeholder='enter your email' /><br /><br />
        <button className='ContactButton'>submit</button>
      </div>
    </div>
  )
}
