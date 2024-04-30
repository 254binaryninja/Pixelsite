import { NavLink,Outlet,Link } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from 'react-modal'
//loader 
import '../assets/css/root.css'

export default function RootLayout(){
    

        
    return (
        <div className="font-audiowide">
        
        
            <div class="absolute top-0 left-0 w-16 md:w-32 lg:w-48 ">
                <img src="src\assets\logo\pixellogo.png" alt="" />
            </div>

            <nav className="absolute top-5 right-0 block sm:inline">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-blue-400">
                    <NavLink to="/" className="text-gray-800 dark:text-blue-400  mx-1.5 sm:mx-6">
                        Home
                    </NavLink>

                    <NavLink
                        to="/Company"
                        className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                    >
                        Company
                    </NavLink>

                    <NavLink
                        to="/form" 
                        className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                    >
                        Services
                    </NavLink>

                    <NavLink
                        to="/Contact"
                        className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
            <main className="mt-0">
                <Outlet />
            </main>
            

<footer class="bg-gray-900">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="lg:flex lg:items-start lg:gap-8">
      <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
        <div class="col-span-2">
          <div className="">
            <h2 class="text-2xl font-bold text-gray-50">Lets do coffee on us </h2>

            <p class="mt-4 text-gray-50">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
              molestias.
            </p>
          </div>
          < motion.div 
          
          id="container  mt-100 flex justify-items-center">
	<div class="steam" id="steam1"> </div>
	<div class="steam" id="steam2"> </div>
	<div class="steam" id="steam3"> </div>
	<div class="steam" id="steam4"> </div>

	<div id="cup">
		<div id="cup-body">
			<div id="cup-shade"></div>
		</div>
		<div id="cup-handle"></div>
	</div>

	<div id="saucer"></div>

	<div id="shadow"></div>
</motion.div>
        </div>

        <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
          <form class="w-full">
            <label for="UserEmail" class="sr-only"> Email </label>

           
          </form>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-gray-50">Services</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" class="text-cyan-50 transition hover:opacity-75"> Web Traffic </a>
            </li>

            <li>
              <a href="#" class="text-cyan-50 transition hover:opacity-75"> Web Design </a>
            </li>

            <li>
              <a href="#" class="text-gray-50 transition hover:opacity-75"> App Development </a>
            </li>

            <li>
              <a href="#" class="text-gray-50 transition hover:opacity-75"> Marketing </a>
            </li>

            <li>
              <a href="#" class="text-gray-50 transition hover:opacity-75"> SEO Optimisation </a>
            </li>
          </ul>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-gray-50">Company</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <Link to="/About" class="text-gray-50 transition hover:opacity-75"> About </Link>
            </li>

            <li>
              <Link to="/Teams" class="text-gray-50 transition hover:opacity-75"> Team </Link>
            </li>

            <li>
              <Link to="/Marketing" class="text-gray-50 transition hover:opacity-75"> Marketing </Link>
            </li>
            <li>
              <Link to="/Process" class="text-gray-50 transition hover:opacity-75"> Process </Link>
            </li>
          </ul>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-gray-50">Helpful Links</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" class="text-gray-50 transition hover:opacity-75"> Contact </a>
            </li>

            <li>
              <a href="#" class="text-gray-50 transition hover:opacity-75"> FAQs </a>
            </li>

            <li>
              <a href="#" class="text-gray-50 transition hover:opacity-75"> Live Chat </a>
            </li>
          </ul>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-gray-50">Legal</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" class="text-gray-50 transition hover:opacity-75"> Accessibility </a>
            </li>

            <li>
              <a href="#" class="text-gray-50 transition hover:opacity-75"> Returns Policy </a>
            </li>

            <li>
              <a href="#" class="text-gray-50 transition hover:opacity-75"> Refund Policy </a>
            </li>

            <li>
              <a href="#" class="text-gray-50 transition hover:opacity-75"> Hiring Statistics </a>
            </li>
          </ul>
        </div>

       

        <ul class="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
         

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              class="text-gray-50 transition hover:opacity-75"
            >
              <span class="sr-only">Instagram</span>

              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              class="text-gray-50 transition hover:opacity-75"
            >
              <span class="sr-only">Twitter</span>

              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              class="text-gray-50 transition hover:opacity-75"
            >
              <span class="sr-only">GitHub</span>

              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
          <a
              href="#"
              rel="noreferrer"
              target="_blank"
              class="text-gray-50 transition hover:opacity-75"
            >
                <span class="sr-only">Whatsapp</span>
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"  viewBox="0 0 256 258"><defs>
                <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1faf38"/>
                <stop offset="100%" stop-color="#60d669"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#f9f9f9"/>
                <stop offset="100%" stop-color="currentColor"/></linearGradient></defs>
                <path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/>
                <path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="currentColor" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86
                 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-8 border-t border-gray-100 pt-8">
      <div class="sm:flex sm:justify-between">
        <p class="text-xs text-gray-50">&copy; 2024.Pixel Surge. All rights reserved.| created by (❁´◡`❁) CHEMIST</p>

        <ul class="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
          <li>
            <a href="#" class="text-gray-50 transition hover:opacity-75"> Terms & Conditions </a>
          </li>

          <li>
            <a href="#" class="text-gray-50 transition hover:opacity-75"> Privacy Policy </a>
          </li>

          <li>
            <a href="#" class="text-gray-50 transition hover:opacity-75"> Cookies </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer> 

        </div>
    );
}