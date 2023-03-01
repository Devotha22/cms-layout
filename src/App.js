 import logo from './logo.svg';
import './App.css';
import{Component} from 'react';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends Component{
//   constructor(){
//   // console.log('constructor');
//   super()
//   this.state={
//     users:["My name is devotha"]
//   }
//   }
//   componentDidMount(){
//     // console.log('DidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>console.log(res.json))
//     .then(nameList=>{
//       console.log(nameList)
//       this.setState({users:nameList});
//     })
//   }
//   render(){
//     return(
//       <div >
//          <input type="text" onChange={
//            (e)=>console.log(e.target.value)}placeholder='what are you searching for'/>
//           {
            
//           this.state.users.map((data)=>{
//             return <h1 key ={data.id}> {data.name}</h1>
//           })
//          }
  
//          </div>
//     )
//   }
// }
class App extends Component{
  constructor(){
  super()
  this.state={
    student:'',
    prod:[]
  }
  }
  search=(e)=>{
    this.setState
  ({student:e.target.value})}
  componentDidMount(){
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(result=>{this.setState({prod:result.products});
    });
  
  }
  render(){
    const filterData=this.state.prod.filter(item=>{return item.brand.toLocaleLowerCase().includes(this.state.student.toLocaleLowerCase())
  });console.log(filterData);
    return(
      <div className='App'>
        
           <h1>{this.state.student}</h1>
           
          <input type="text"  onChange={this.search}/>
          
        {filterData.map((result)=>{return(
          <div>
            <p key={result.id}>{result.brand}{result.category}</p>
          </div>
        )})}

        

        </div>

    )
  }
}
 export default App;
 

