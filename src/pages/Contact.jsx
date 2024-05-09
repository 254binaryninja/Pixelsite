
import { useRef } from "react"
import emailjs from "@emailjs/browser"
export default function Contact() {
   const form = useRef();

         const handleSubmit = (e) =>{
           e.preventDefault();

           emailjs
               .sendForm('service_tgkh3ui', 'template_btxj0ad', form.current, {
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
        <div className="font-audiowide mt-40 mb-20">
          <form ref={form} onSubmit={handleSubmit}>
          <section className="bg-white text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto" >
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">In need of assistance do not hesitate.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500
             focus:bg-white focus:ring-2
              focus:ring-indigo-200 text-base outline-none
               text-gray-700 py-1 px-3 leading-8 transition-colors
                duration-200 ease-in-out"

            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email"
             className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300
              focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
              text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

              />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Message</label>
            <textarea 
            id="message" name="message" 
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
             focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 
             transition-colors duration-200 ease-in-out"

             ></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button 
          type="submit"
          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">info@pixelsurgedesigners.com</a>
          <p className="leading-normal my-5">Pixel Surge Designers
            
          </p>
         
          
        </div>
      </div>
    </div>
  </div>
</section></form>

        </div>
    )
}