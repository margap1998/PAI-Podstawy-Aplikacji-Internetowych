import React from 'react';

class Filter extends React.Component{
	constructor(props){
		super(props);
		this.routine = this.routine.bind(this);
	}
	routine(e){
	this.props.onClick(!this.props.filter);	
	}
	render(){
		return (
		<div className={"com"}>
		<div className={"compint"}>
			<input type="checkbox" onChange= {this.routine} checked={this.props.filter}>
			</input>
			<label>Hide completed</label>
		</div></div>)
		;
	}
}

export {Filter};