import React, {Component} from 'react';
import Navigation from './navigation'

class Body extends Component{
    render(){ 
      return(
      <> < div> <Navigation/>
       </div>
     <div className="bg-gradient-to-br from-yellow-600 to-blue-900 p-3"  >
       <div class="grid grid-cols-2 gap-0 p-8">
         <div class="col-span-text-justify p-3">
           <h1 class="text-5xl font-extrabold dark:text-white">Welcom to our Company</h1>
           <p class="p-4">Lorem ipsum dolor sit amet. Et asperiores expedita 
         ut dolor corrupti est praesentium facere et perferendis nihil 
         a soluta similique et corrupti ducimus? Et enim officiis in quaerat 
         omnis et possimus adipisci qui quia reprehenderit. Non vitae soluta et
          quia deleniti et similique nulla eos beatae nostrum a iste rerum</p>
         </div>
         <div class="col-span-1 p-3">
           
         <div class="flex flex-wrap justify-center">
  <img
    src="https://tecdn.b-cdn.net/img/new/standard/city/042.jpg"
    class=" rounded-full h-60 w-60 shadow-lg dark:shadow-black/30"
    alt="" />
</div>

         </div>
       </div>
       <div class="flex space-x-4">
    </div>
      <h2 class="text-4xl font-bold dark:text-white text-center">What We Offers</h2>
      <p class="p-3"> Lorem ipsum dolor sit amet. Et asperiores expedita 
         ut dolor corrupti est praesentium facere et perferendis nihil 
         a soluta similique et corrupti ducimus? Et enim officiis in quaerat 
         omnis et possimus adipisci qui quia reprehenderit. Non vitae soluta et
          quia deleniti et similique nulla eos beatae nostrum a iste rerum
          </p>
    
  <div class="grid grid-cols-3 gap-4 p-4">
  
  <div class="col-span-1   hover:scale-105 hover:shadow-90"> 
  <div>    <img
    src="https://i.pinimg.com/originals/82/e9/0b/82e90b6ff1b2ad2c04a9e2df24a03050.jpg"
    class=" rounded-full h-60 w-60 shadow-lg dark:shadow-black/30"
    alt="" /></div>
  <p>Lorem ipsum dolor sit amet. Et asperiores expedita 
         ut dolor corrupti est praesentium facere et perferendis nihil 
         a soluta similique et corrupti ducimus? Et enim officiis in quaerat 
         omnis et possimus adipisci qui quia reprehenderit. Non vitae soluta et
          quia deleniti et similique nulla eos beatae nostrum a iste rerum</p>
          </div>
  <div class="col-span-1 p-3  hover:bg-green-900"> 
  <img
    src="https://i.pinimg.com/originals/82/e9/0b/82e90b6ff1b2ad2c04a9e2df24a03050.jpg"
    class=" rounded-full h-60 w-60 shadow-lg dark:shadow-black/30"
    alt="" />
    <p>Lorem ipsum dolor sit amet. Et asperiores expedita 
         ut dolor corrupti est praesentium facere et perferendis nihil 
         a soluta similique et corrupti ducimus? Et enim officiis in quaerat 
         omnis et possimus adipisci qui quia reprehenderit. Non vitae soluta et
          quia deleniti et similique nulla eos beatae nostrum a iste rerum</p>
          </div>
  <div class="col-span-1 p-3 hover:bg-green-900">
  <img
    src="https://previews.123rf.com/images/pratyaksa/pratyaksa1607/pratyaksa160700087/59777801-programming-or-coding-icon-programming-editor-symbol.jpg"
    class=" rounded-full h-60 w-60 shadow-lg dark:shadow-black/30"
    alt="" /> <p>Lorem ipsum dolor sit amet. Et asperiores expedita 
         ut dolor corrupti est praesentium facere et perferendis nihil 
         a soluta similique et corrupti ducimus? Et enim officiis in quaerat 
         omnis et possimus adipisci qui quia reprehenderit. Non vitae soluta et
          quia deleniti et similique nulla eos beatae nostrum a iste rerum</p>
         </div>
</div>
     </div></>
    )
    }
  };
  
  
  
  
export default Body;