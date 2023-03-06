import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component{
    render(){ 
      return(
       
<nav class="w-full sticky top-0 z-50 bg-sky-900 border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
    
            <span class="self-center text-3xl font-semibold whitespace-nowrap ">
                <span class="text-yellow-700">L</span>
                <span class="text-blue-700">O</span>
                <span class="text-yellow-700">G</span>
                <span class="text-blue-700">O</span></span>
        
        
        <div id="mega-menu-full" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-yellow-600 font-bold text-lg" >
            <ul class="flex flex-col p-4 mt-4 border border-yellow-600 rounded-lg bg-yellow-600 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-yellow-600 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <Link class=" bg-yellow-600 block py-2 pl-3 pr-4 text-black text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" to="/home">Home</Link>
                </li>
                 <li>
                    <Link class="bg-yellow-600 block py-2 pl-3 pr-4 text-black text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" to="/aboutus">About Us</Link>
                </li>
                
                <li>
                    <Link  class="bg-yellow-600 block py-2 pl-3 pr-4 text-black text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"to="/services">Services</Link>
                </li>
                <li>
                    <Link class="bg-yellow-600 block py-2 pl-3 pr-4 text-black text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" to="/contact">Contact</Link>
                </li>
                <li>
                    <Link class="bg-yellow-600 block py-2 pl-3 pr-4 text-black text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"to="/login">SignUp</Link>
                </li>
            </ul>
        </div>
    </div>
    
</nav>



    )
    }
  };
  
  
  export default Navigation;