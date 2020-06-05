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
		this.state ={list:[], filter:false};
		this.addTask= this.addTask.bind(this);
		this.filter= this.filter.bind(this);
	}
	addTask(list){
		this.setState({list:list});
	}
	
	filter(){
		this.setState({filter:!this.state.filter});
	}
	render(){
		return (<div id="app">
			<h1>TODO List</h1>
			<div id="boxApp">
			<Filter onClick={this.filter}/>
			<TaskList list={this.state.list} filter={this.state.filter}/>
			<NewTask list={this.state.list} onAddTask={this.addTask} filter={this.state.filter}/>
			</div>
		</div>);
	}
}

ReactDOM.render(<App />,document.getElementById('root'))
