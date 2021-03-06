import React,{Component} from "react";
import './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
    return (
        <Auxiliary>
            <div className="Person">
            <p onClick ={this.props.click}> I am {this.props.name} age is {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type ="text" onChange={this.props.changed} />


        </div>
        </Auxiliary>
        

    );

    }
    
}
export default Person;