import React from 'react';
import {Task} from'./Task.js';

class TaskList extends React.Component{
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(key,val){
		this.props.list[key].checked=!val
		this.props.onClick(this.props.list,val)
	}
	render(){
		console.log(this.props.list)
		if (this.props.list.length<1)
		{return <div className={"com"}>Nothing to do...</div>;}
		else
		{
			var tl = this.props.list.map((el) =>
					<Task key={el.key}
						filter={this.props.filter}
						id={el.key}
						name={el.val}
						checked={el.checked}
						onClick={this.onClick}
						/>
					);
		if(this.props.activeTasks<1 && this.props.filter)
			return <div className={"com"}>Nothing to do...</div>;
		else
			return <div className={"TaskList"}>{tl}</div>;
		}
		
	}
}
export{TaskList};