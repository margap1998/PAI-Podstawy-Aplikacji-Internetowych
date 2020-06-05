import React from 'react';
import {Task} from'./Task.js';

class TaskList extends React.Component{
	constructor(props){
		super(props);
		this.state = {list:this.props.list}
	}
	render(){
		if (this.state.list.length<1)
			return <div class="com">Nothing to do...</div>;
		else
		{
			var tl = this.state.list.map((el) => <Task id={el.key} name={el.val}/>);
		return <div class="TaskList">{tl}</div>;
		}
		
	}
}
export{TaskList};