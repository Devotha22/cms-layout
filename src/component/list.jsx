import React, {Component} from 'react'
import '../App.css';
class List extends Component
{
    constructor(props){
        super(props);
    }
    render(props){
        console.log(this.props);
        return(
            <div className="list-of-data">
                {this.props.user.map((result)=>{return(
                    <div className="brand">
                      <p key={result.id}>{result.brand}{result.category}</p></div>
                )})}
            </div>
            
        )
        // return({filterData.map((result)=>{return(
        //     <div className="brand">
        //       <p key={result.id}>{result.brand}{result.category}</p>)</div>
        // )})
        }
}
export default List;