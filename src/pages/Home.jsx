import {motion}from 'framer-motion'

export default function Home() {
    return(
        <div className='font-forum text-cyan-50 text-lg sm:text-base md:text-lg lg:text-xl'>
            <motion.div
            initial={{x:500}}
             animate={{x:-40}}
            transition={{duration:2.5,ease:"easeOut"}}>
            <h1 className='flex justify-center mt-20 text-5xl semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500'>PIXEL SURGE</h1>
                <h2 className='flex justify-center  text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-300 '>DESIGNERS</h2>
                </motion.div>
                <p className='text-cyan-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo molestias voluptatibus ad nemo unde ducimus adipisci quis repellat corporis enim libero dolorem, excepturi facilis error ullam accusamus sequi sint?</p>
         <div className='mt-10'>
         <div className='flex justify-start'>
                 <h3 className='font-semibold underline'>What we do</h3>
                 </div>
                 <motion.div
                 initial={{x:-200}}
                 whileInView={{x:0}}
                    transition={{duration:3.5,ease:"easeOut"}}
                 className='flex  md:flex'>
                 <p className='justify-start max-w-md whitespace-normal break-words'>Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Mollitia ducimus dolores, maiores sed,
                   unde commodi repellat a aliquid voluptas libero sint magni autem!
                    Placeat nemo, esse blanditiis nulla harum incidunt!</p>
                    </motion.div>
                   
                  </div>
        
           <div className='mt-20'>
                 <h4 className='flex justify-center  font-semibold underline'>Our Approach</h4>
                 <p className='justify-center max-w-md mx-auto '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam non, dolorum vitae possimus, vero magni reiciendis expedita in alias earum nisi, quis dolores ullam doloribus voluptas consectetur exercitationem! Expedita, magni.</p>
           </div>
           <div className='mt-10'>
              <div className='flex '>
                 <h3 className=' justify-start font-semibold'>How do you want us to help ? </h3>
                 </div>
                 <div className='flex'>
                   <ul className='list-disc'>
                        <li>Item1</li>
                        <li>Item2</li>
                        <li>Item3</li>
                        <li>Item3</li>
                   </ul>
                    </div>
                    
                <div className='flex'>
                        <h5 className='justify-center max-w-md mx-auto  underline'>Testimonials</h5>
                             </div>
                             <div className='flex'>
                        <p className='justify-center max-w-md mx-auto '>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, quibusdam? Quidem a enim sint sed molestias repellat soluta in consectetur excepturi, maiores iste delectus eos autem earum dolorem aliquam sapiente."
                           Warren Oriya</p>
                             </div>         
           </div>
        
        </div>
    )
}