import React from 'react'
import './navbar.css'
import './contact.css'

export default function Contact() {
  return (
    <div class="main_content">
{/* <h2 class="header" > I am in About page</h2>   */}
<div class="info">
<br/>
<h1>Contact Form</h1><br/><br/>
<div align="center">
<div class="container">
  <form>
    <h4 align="left">First Name</h4>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <h4 align="left">Last Name</h4>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <h4 align="left">E-mail</h4>
    <input type="email" id="email" name="email" placeholder="Your E-mail id.."/>

    <h4 align="left">Subject</h4>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"/>
    </form>
  
</div>

</div>
</div>

</div>
  )
}
