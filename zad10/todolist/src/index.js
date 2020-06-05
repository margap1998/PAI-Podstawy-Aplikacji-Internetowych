import React from 'react';
import ReactDOM from 'react-dom';
import {Task} from'./Task.js';
import {Filter} from './Filter.js'
import './style.css'

class TaskList extends React.Component{
	static list = []
	static push(name)
	{
		TaskList.list.push(name);
	}
	render(){
		if (TaskList.list.length<1)
			return <div class="com">Nothing to do...</div>;
		else
		{
			var tl = TaskList.list.map((el) => <Task name={el}/>);
		return <div class="com">{tl}</div>;
		}
		
	}
}

class NewTask extends React.Component{
	
	routine(e){
		var inElement = document.getElementById("inputNewTask")
		TaskList.push(inElement.value);
		console.log(TaskList.list[TaskList.list.length-1]);
		render();
	}
	
	render(){
		return (<div class="com">
		<div class="compint">
			<input id="inputNewTask">
			</input>
			<label htmlFor="inputNewTask" onClick={this.routine}>
				<button>
					Add
				</button>
			</label>
		</div></div>);
	}
}

function App(){
	return (<div id="app">
		<h1>TODO List</h1>
		<div id="boxApp">
		<Filter onClick={render}/>
		<TaskList/>
		<NewTask onClick={render}/>
		</div>
	</div>);
}

function render(){	
	ReactDOM.render(<App />,document.getElementById('root'))
}

render();