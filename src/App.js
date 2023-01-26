import './App.css';
import React,{Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.AddListHandler = this.AddListHandler.bind(this);
    this.RemoveListHandler = this.RemoveListHandler.bind(this);
    this.HandleChange = this.HandleChange.bind(this);
    this.state = {
      input: '',
      data: []
    }
  }

  AddListHandler(){
    var arr = this.state.data;
    arr.push(this.state.input);
    this.setState({
      data: arr,
 
    });
    var ul = document.getElementById('todo-list');
    var li = document.createElement('li');
    var label = document.createElement('label');
    ul.appendChild(li);
    li.append(label);
    console.log(ul);
    
    for(var i = 0; i < arr.length; i++) {
       label.innerHTML = this.state.data[i];
    
    }

    // event.target.tagName means if there nested element exists.
    // event.target.classList arranges the nested element of css toggle by className.
    // true and false can be used in this code.
    
    var todoList = document.querySelector('ul');
    todoList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checked');
    }
  }, false);
    
  }

  RemoveListHandler() {
    var ul = document.getElementById('todo-list').children;
    var ulLength = ul.length;
    for(var i = 0; i < ulLength; i++ ) {
      return ul[i].remove();
    }
  }


  HandleChange(event){
    this.setState({
      input: event.target.value
    })
  }

  render() {
    
  return (
   
    <div className="card">
      <h1>THINGS TO DO</h1>
      <ul id="todo-list" >
      </ul>
      <input type="text" placeholder="Type Task" id="inpt" onChange={this.HandleChange} ></input>
      <button id="btn1" onClick={this.AddListHandler}>Add New Task To Do</button>
      <button id="btn2" onClick={this.RemoveListHandler}>Remove Task</button>
    </div>

    
  );

  }
}

export default App;
