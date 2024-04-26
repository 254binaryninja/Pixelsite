import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import '../assets/css/card.css'
export default  function Company(){
  return(
    <div class="mt-60 text-cyan-50 text-lg sm:text-base md:text-lg lg:text-xl">
      
           <div className='mt-10 mb-0'>
                 <h4 className='flex justify-center  font-semibold underline'>Our History</h4>
                 <p className='justify-center  mx-auto '>From a spark of creativity and a relentless drive for innovation, our company emerged as a beacon in the digital landscape. Founded by a team of visionary entrepreneurs, we quickly distinguished ourselves with our cutting-edge web design and strategic marketing solutions. Our journey has been marked by rapid growth and transformative success stories, propelling brands into the digital future. As we continue to evolve and expand our horizons, our commitment to excellence remains unwavering, fueling our mission to redefine the boundaries of the digital realm</p>
           </div>
           <div class="background"></div>
    <div class="background-texture"></div>

    <section class="carousel">
      <h2 class="font-bold underline text-cyan-400">Our Features</h2>
      <div class="carousel__container">
        <Link to = "/About">
        <div class="carousel-item m-8">
          <img
            class="carousel-item__img"
            src="src\assets\images\glowing.jpg"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
             
            </div>
            <h5 class="carousel-item__details--title">About Us</h5>
            <h6 class="carousel-item__details--subtitle">Know more about Pixelsurge</h6>
          </div>
        </div></Link>
        <Link to= "/Marketing">
        <div class="carousel-item m-8">
          <img
            class="carousel-item__img"
            src="src\assets\images\graph.jpg"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
             
            </div>
            <h5 class="carousel-item__details--title">Market</h5>
            <h6 class="carousel-item__details--subtitle">Learn our marketing strategies</h6>
          </div>
        </div></Link>
        <Link to = "/Process">
        <div class="carousel-item m-8">
          <img
            class="carousel-item__img"
            src="src\assets\images\SEO.jpg"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              
            </div>
            <h5 class="carousel-item__details--title">Process</h5>
            <h6 class="carousel-item__details--subtitle">Know more about our processes</h6>
          </div>
        </div></Link>
        <Link to = "/Solution">
        <div class="carousel-item m-8">
          <img
            class="carousel-item__img"
            src="src\assets\images\people.jpg"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              
            </div>
            <h5 class="carousel-item__details--title">Solution</h5>
            <h6 class="carousel-item__details--subtitle">Know the solutions available to you as Customer</h6>
          </div>
        </div></Link>
        <Link to ="/Teams">
        <div class="carousel-item m-8">
          <img
            class="carousel-item__img"
            src="src\assets\images\imagepixel2.webp"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
             
            </div>
            <h5 class="carousel-item__details--title">Teams</h5>
            <h6 class="carousel-item__details--subtitle">Know our teams</h6>
          </div>
        </div></Link>
       

       
      </div>
    </section>
                   
    </div>
  )
}