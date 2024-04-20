import '../assets/css/home.css'
export default function Home() {
    return(
        <div className='font-forum text-cyan-50'>
            <h1 className='flex justify-center mt-20 text-cyan-50 text-5xl  font-semibold'>PIXELSURGE</h1>
                <h2 className='flex justify-center text-cyan-50 text-3xl '>DESIGNERS</h2>
                <p className='text-cyan-50 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo molestias voluptatibus ad nemo unde ducimus adipisci quis repellat corporis enim libero dolorem, excepturi facilis error ullam accusamus sequi sint?</p>
         <div className='mt-10'>
         <div className='flex justify-start'>
                 <h3 className='text-3xl font-semibold underline'>What we do</h3>
                 </div>
                 <div className='flex  text-2xl md:flex'>
                 <p className='justify-start max-w-md whitespace-normal break-words'>Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Mollitia ducimus dolores, maiores sed,
                   unde commodi repellat a aliquid voluptas libero sint magni autem!
                    Placeat nemo, esse blanditiis nulla harum incidunt!</p>
                    <div className='justify-end'><img src='src\assets\images\people.jpg' alt="" className='w-64 h-30'/></div>
                   </div>
                  </div>
           <div className='mt-10'>
                 <h4 className='flex justify-center text-3xl font-semibold underline'>Our Approach</h4>
                 <p className='justify-center max-w-md mx-auto text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam non, dolorum vitae possimus, vero magni reiciendis expedita in alias earum nisi, quis dolores ullam doloribus voluptas consectetur exercitationem! Expedita, magni.</p>
           </div>
        </div>
    )
}