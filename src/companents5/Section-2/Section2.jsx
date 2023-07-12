import React from 'react'
import "./Section2.css"

const Section2 = () => {
  return (
    <div className='bg'>
      <div className='contact-flex containerr'>


         <div className='contact-inputt'>
          
          <div className='contact-input'>
            <input type="text" placeholder='Nick Name'/>
            <input type="text" placeholder='E-mail'/>
          </div>

         <span class="control-wrap" data-name="message">
          <textarea placeholder='Write a Message' name="message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control form-comment" aria-required="true" aria-invalid="false" ></textarea>
        </span>
        <button>Send Message</button>
         </div>



       
       <div className='contact-op'>
          <div>
          <h1>Contact Info</h1>
           <h6 className='ggg'>
             Weve been a nearly strategic thought leader for five <br />
              we are bring    unrivaled decades incididunt
             </h6>
             <p>
             <i class="fa-solid  fa-location-dot "></i> dambo dika,USA rode
             </p>
             <p>
             <i class="fa-solid  fa-envelope-open-text"></i>example@example.com
             </p>
             <p>
             <i class="fa-solid  fa-phone"></i>+9 123 456 78
             </p>
             <div className='contact-icon'>
             <i class="fa-brands fa-facebook"></i>
             <i class="fa-brands fa-twitter"></i>
             <i class="fa-brands fa-instagram"></i>
             <i class="fa-brands fa-telegram"></i>
             </div>
          </div>
       </div>






      </div>
    </div>
  )
}

export default Section2