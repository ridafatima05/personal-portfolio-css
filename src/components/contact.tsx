import "../style/contact.css"
import React from 'react'

const Contact = () => {
  return (
    <main className="contact-main">
        <div className="form-container">
            <h1 className="heading">Contact Me</h1>
            <form action="" className="form">
               <input type='text' placeholder='Your Full Name '/>
               <input type="email" placeholder='Your Email' />
               <input className="msg"   type="text" placeholder='Your Message'/>
            </form>
            <button className="button">Submit</button>
        </div>
    </main>
  )
}

export default Contact
