import { motion } from "framer-motion"
export default function Process(){
    return (
        <>
         <div className="mt-40 mb-20 text-cyan-50">
            <div className=" flex justify-center  "><h1 className=" bg-clip-text text-transparent  bg-gradient-to-r from-green-400 to-purple-500 via-white animate-gradient-x text-3xl underline text-bold">Process</h1></div>
            <motion.div
            initial={{opacity:0.2}}
            whileInView={{opacity:1}}
            transition={{duration:3}}
            className="flex items-center"><p className="">
            At Pixel Surge Designers, our operational approach is centred on collaboration and transparency. When you partner with us, the journey begins  with crafting a website tailored to your unique needs and preferences. From sleek designs to user-friendly interfaces, we work closely with you to ensure that every aspect of your website reflects your brand identity and resonates with your target audience.
                </p><img src="src\assets\images\pexels-mikhail-nilov-8297478.jpg"alt="Serach engine optimization"className="rounded-md m-10 w-40 h-40"/>
                </motion.div>
                <motion.div
                initial={{opacity:0.2}}
                whileInView={{opacity:1}}
                transition={{duration:3}}
                className="flex items-center">
                <img src="src\assets\images\pexels-eva-bronzini-7661135.jpg"alt="Serach engine optimization"className="rounded-md m-10 w-40 h-40"/>
                  <p className="">
                  Once the website design is finalized to your satisfaction
                  , we'll set it live upon your approval. This marks the beginning of our web traffic services journey.
                   Depending on the plan you've chosen, we'll kickstart targeted strategies to drive traffic to your website, maximizing its visibility and engagement. Whether it's through search engine optimization (SEO) social media marketing, or pay-per-click (PPC) advertising, we'll implement the right tactics to  attract your ideal audience.
                   </p>
                
                </motion.div>
                <motion.div
                 initial={{opacity:0.2}}
                 whileInView={{opacity:1}}
                 transition={{duration:3}}
                className="m-8"><p>we offer guidance and advice every step of the way. Whether it's tweaking your website for better conversion rates or refining your marketing strategy for optimal results, we're here to lend our expertise and support. We view our clients as partners, and we're committed to ensuring that you're actively involved in the process and aligned with our goals. A summary is that we craft a tailored website for your firm. Before going live, we’ll present it for your review and feedback. Once approved, we’ll launch a comprehensive marketing campaign using methods like email marketing, pay-per-click, social media ads, google ads, SEO and SERPs. </p></motion.div>
        </div>
        </>
    )
}