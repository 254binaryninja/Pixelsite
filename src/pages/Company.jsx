import { motion } from "framer-motion"
export default  function Company(){
  return(
    <div class="mt-60 text-cyan-50 font-forum text-lg sm:text-base md:text-lg lg:text-xl">
      <div className="flex  md:flex mt-10">
      <p className="justify-start">
        Lorem ipsum dolor sit amet,
         consectetur adipisicing elit.
          Voluptatibus culpa debitis ratione necessitatibus
           possimus commodi libero fugit eveniet aut pariatur sequi 
           quasi asperiores quam accusantium id, quas modi similique aliquam.</p>
          
           </div>
      <div className="flex  md:flex mt-10">
      <p className="justify-start max-w-md whitespace-normal break-words">
        Lorem ipsum dolor sit amet,
         consectetur adipisicing elit.
          Voluptatibus culpa debitis ratione necessitatibus
           possimus commodi libero fugit eveniet aut pariatur sequi 
           quasi asperiores quam accusantium id, quas modi similique aliquam.</p>
          
           </div>
           <div className='mt-20'>
                 <h4 className='flex justify-center  font-semibold underline'>Our History</h4>
                 <p className='justify-center max-w-md mx-auto '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam non, dolorum vitae possimus, vero magni reiciendis expedita in alias earum nisi, quis dolores ullam doloribus voluptas consectetur exercitationem! Expedita, magni.</p>
           </div>
           <div className="flex justify-start">
              <h2 className="underline font-bold">Contact us</h2>
           </div>
    </div>
  )
}