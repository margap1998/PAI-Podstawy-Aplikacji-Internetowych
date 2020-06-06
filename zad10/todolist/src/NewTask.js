import React from 'react';
class NewTask extends React.Component{
	constructor(props){
		super(props);
		this.state={newid:0};
		this.routineOnClick = this.routineOnClick.bind(this);
		this.routineEnterKey = this.routineEnterKey.bind(this);
	}
	
	routineOnClick(e){
		var id = this.state.newid;
		this.setState({newid:(id+1)});
		var inElement = document.getElementById("inputNewTask");
		this.props.list.push({val:inElement.value,key:id,checked:false});
		this.props.onAddTask(this.props.list);
		
	}
	routineEnterKey(e){
		if (e.key === "Enter"){
			this.routineOnClick(e);
		}
	}
	render(){
		return (<div className={"com"}>
			<div className={"compint"}>
			<input id="inputNewTask" onKeyDown={this.routineEnterKey}>
			</input>
			<label htmlFor="inputNewTask" onClick={(e) =>{this.routineOnClick(e)}}>
				<button>
					Add
				</button>
			</label>
		</div></div>);
	}
}
export{NewTask};