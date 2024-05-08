import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import '../css/form.css';
export default function Formweb (){
      const [formData,setFormData] = useState ({
        email:'',
        name:'',
        place:'',
      });
      const handleSubmit = (e)=> {
        e.preventDefault();
       // emailJS send service
       emailjs.send ('service_lzk7r1g','template_rmxhn3g',formData,'7iLgO1wg0Aw30EeKNyV7l')
        .then((response)=> {
          console.log('Email sent succesfully',response)
          alert('Email sent succesfully')
        })
        .catch((error)=> {
          console.error('Failed to send email',error)
          alert('Failed to send email')
        }) 
      }
    return(
         <>
         <div class="form-container justify-center">
      <form class="form" onSubmit={handleSubmit}>
        
        <div class="form-group">
          <label for="email">Name</label>
          <input name="name" id="name" type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input required="" name="email" id="email" type="text"
          value={formData.email}
           onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
        </div>
        <div class="form-group">
          <label for="textarea">How did you hear about us?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea"
          value={formData.place}
          onChange={(e) => setFormData({ ...formData,place: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" class="form-submit-btn"><Link to ="/Services">Submit</Link></button>
      </form>
    </div>
         
         <div>
          
         </div>
          </>
    
  )}