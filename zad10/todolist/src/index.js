import React from 'react';
import ReactDOM from 'react-dom';
import {NewTask} from'./NewTask.js';
import {Filter} from './Filter.js'
import {TaskList} from'./TaskList.js';
import './style.css'



class App extends React.Component{
	constructor(props){
		super(props);
		this.state ={list:[], filter:false,activeTasks:0};
		this.addTask= this.addTask.bind(this);
		this.filter= this.filter.bind(this);
		this.changeState=this.changeState.bind(this)
	}
	addTask(list){
		this.setState({list:list});
		this.setState((state)=>({activeTasks:(state.activeTasks+1)}));
	}
	
	filter(){
		this.setState({filter:!this.state.filter});
	}
	changeState(list,act){
		this.setState({list:list});
		if(act){
			this.setState((state)=>({activeTasks:(state.activeTasks+1)}));
		}
		else{
			this.setState((state)=>({activeTasks:(state.activeTasks-1)}));
		}
	}
	render(){
		console.log(this.state.activeTasks)
		return (<div id="app">
			<h1>TODO List</h1>
			<div id="boxApp">
			<Filter onClick={this.filter}/>
			<TaskList
				activeTasks={this.state.activeTasks}
				list={this.state.list} 
				onClick={this.changeState} 
				filter={this.state.filter}/>
			<NewTask list={this.state.list} onAddTask={this.addTask} filter={this.state.filter}/>
			</div>
		</div>);
	}
}

ReactDOM.render(<App />,document.getElementById('root'))
