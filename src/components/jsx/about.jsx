import { motion } from "framer-motion"
export default function  About (){
    return (
        <>
          <div className="mt-40 mb-20 text-cyan-50">
            <div className=" flex flex-wrap justify-center  "><h1 className=" bg-clip-text text-transparent  bg-gradient-to-r from-green-400 to-purple-500 via-white animate-gradient-x text-3xl underline text-bold">About us</h1></div>
            <motion.div
            initial={{opacity:0.1}}
            whileInView={{opacity:1}}
            transition={{duration:3,ease:"easeOut"}}
            className="flex items-center"><p className="">
            Welcome to Pixel Surge Designers, where your digital success is our mission! We specialize in creating stunning websites and driving targeted traffic to help businesses thrive in the online world.
                </p>
                </motion.div>
                <motion.div
                initial={{opacity:0.1}}
                whileInView={{opacity:1}}
                transition={{duration:3,ease:"easeOut"}}
                className="flex items-center">
                <img src="src\assets\images\pexels-eva-bronzini-7661492.jpg"alt="Serach engine optimization"className="rounded-md m-4 w-40 h-40"/>
                  <p className="">
                  In today's digital age, a strong online presence is essential for business growth. In Pixel Surge Designers with our expert web design services, we'll create a visually captivating website that not only showcases your brand but also converts visitors into loyal customers. We just don’t target any audience, we embark on a mission to find people who are right for you, those interested in the services you offer.
                </p>
                
                </motion.div>
                <motion.div
                initial={{opacity:0.1}}
                whileInView={{opacity:1}}
                transition={{duration:3,ease:"easeOut"}}
                className="flex items-center">
               <p className="">
               But it doesn't stop there! With our cutting-edge web traffic services, we’ll ensure that your website gets the attention it deserves. By implementing strategies like search engine optimization (SEO) and targeted advertising, we'll drive qualified traffic to your site, boosting visibility and generating leads that will increase sales
                </p>
                <img src="src\assets\images\pexels-kindelmedia-7688986.jpg"alt="Serach engine optimization"className="rounded-md m-4 w-40 h-40"/>
                </motion.div>
                <motion.div
                  initial={{y:30}}
                  whileInView={{y:0}}
                  transition={{duration:3,ease:"easeOut"}}
                >
                <div className="m-10"><p>The best part? The results speak for themselves. Businesses that invest in a professional website and strategic web traffic services experience significant growth in online engagement, lead generation, and ultimately, revenue. Let us help you unlock the full potential of your business online.</p></div>
                <div className="flex justify-center"><img src="src\assets\images\people.jpg"alt="Serach engine optimization"className="rounded-full  h-40 w-74"/></div>
                <div className="m-10"><p> When you partner with Pixel Surge Designers, you're not just getting a service; you're joining a digital revolution. We're passionate about helping businesses like yours succeed online, and we'll stop at nothing to make it happen.
                   
</p></div></motion.div>
               
              
        </div>
        </>
    )
}