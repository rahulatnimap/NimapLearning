 
import './App.css';
import { Component } from 'react';

class App extends Component {
 
  constructor(){
    super();
    this.state = {
      subject : "",
      name : ""
    }
    
    
  }

      handleChange = Event => {
      this.setState ( {
        subject : Event.target.value,
        name : Event.target.value
      });
      
    }
 
     
    


 render(){ return (
     <>
     <div>
      <input type='text'   onChange={this.handleChange} />
    <p>{this.state.subject}</p>
    <p>Name : {this.state.name}</p>

     </div>
     </>
  )}
}

export default App;
