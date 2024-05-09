import { useRef } from 'react';

import { Link } from 'react-router-dom';
import '../css/form.css';
import emailjs from "@emailjs/browser";
export default function Formweb (){
      const form = useRef();
    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs
            .sendForm('service_tgkh3ui', 'template_rmxhn3g', form.current, {
                publicKey: '8kylYyZWFh8coF2lJ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Message sent');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert("Message not Sent")
                },
            );
    }


    return(
         <>
         <div className="form-container justify-center">
      <form ref={form} className="form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label >Name</label>
          <input name="name" id="name" type="text" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input required="" name="email" id="email" type="text"/>
        </div>
        <div className="form-group">
          <label >How did you hear about us?</label>
          <textarea required="" cols="50" rows="10" id="message" name="message"

          />
        </div>
        <button type="submit" className="form-submit-btn"><Link to ="/Services">Submit</Link></button>
      </form>
    </div>
         
         <div>
          
         </div>
          </>
    
  )}