//  import logo from './logo.svg';
 import './App.css';
import {Component} from 'react';
import Navigation from './components/navigation';
import Body from './components/body';
import {Routes,Route} from 'react-router-dom';
import Footer from './components/footer.js';
import Aboutus from './components/aboutus.js';
import Services from './components/services.js';
import Login from './components/login.js';
import Contact from './components/contact.js';
import Dashboard from './components/dashboard';
import Form from './components/form';
import Signup from './components/signup';

 class App extends Component{
   constructor(props){
     super(props);
   }

  render(){
    return(
    <div>
    <Routes>
      <Route path="/home" element={<Body/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Signup/>}/>
      <Route path="/login/dashboard" element={<Login/>}/>
      <Route path="/login/newblog" element={<Form/>}/>
  </Routes>
    
      {/* <Footer/> */}
    </div>
   
    )
  }
 }
 export default App;




