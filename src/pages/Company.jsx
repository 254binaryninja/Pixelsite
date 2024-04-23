import { motion } from "framer-motion"
import '../assets/css/card.css'
export default  function Company(){
  return(
    <div class="mt-60 text-cyan-50 text-lg sm:text-base md:text-lg lg:text-xl">
      
           <div className='mt-20'>
                 <h4 className='flex justify-center  font-semibold underline'>Our History</h4>
                 <p className='justify-center max-w-md mx-auto '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam non, dolorum vitae possimus, vero magni reiciendis expedita in alias earum nisi, quis dolores ullam doloribus voluptas consectetur exercitationem! Expedita, magni.</p>
           </div>
           <div class="background"></div>
    <div class="background-texture"></div>

    <section class="carousel">
      <h2 class="font-bold underline text-cyan-400">Our producs</h2>
      <div class="carousel__container">
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Descriptive Title</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Descriptive Title</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Descriptive Title</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Descriptive Title</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Descriptive Title</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Descriptive Title</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>

        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Descriptive Title</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
      </div>
    </section>
                   
    </div>
  )
}