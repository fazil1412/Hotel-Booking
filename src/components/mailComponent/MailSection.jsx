import React from 'react'
import './mailSection.css'

const MailSection = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, Save money!</h1>
      <span className="mailDes">Sign up and we'll send the best deals to you</span>

      <div className="mailInput">
        <input type="text" placeholder='Your email address'/>
        <button>Subscripe</button>
      </div>
    </div>
  )
}

export default MailSection
