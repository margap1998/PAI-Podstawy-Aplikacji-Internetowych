import React from 'react';
import ReactDOM from 'react-dom';
import {NewTask} from'./NewTask.js';
import {Filter} from './Filter.js'
import {TaskList} from'./TaskList.js';
import './style.css'



class App extends React.Component{
	list = [];
	constructor(props){
		super(props);
		this.state ={list:[]};
		this.addTask= this.addTask.bind(this);
		this.filter= this.filter.bind(this);
	}
	addTask(list){
		this.setState({list:list});
	}
	
	filter(v){
		this.setState({filter:v});
	}
	render(){
		return (<div id="app">
			<h1>TODO List</h1>
			<div id="boxApp">
			<Filter onClick={this.filter}/>
			<TaskList list={this.state.list} on/>
			<NewTask list={this.state.list} onAddTask={this.addTask}/>
			</div>
		</div>);
	}
}

ReactDOM.render(<App />,document.getElementById('root'))
