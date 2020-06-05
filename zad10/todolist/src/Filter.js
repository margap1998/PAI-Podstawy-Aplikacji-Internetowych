import React from 'react';

class Filter extends React.Component{
	fun;
	constructor(props){
		super(props);
		this.fun = this.props.onClick;
	}
	static toErase = false;
	render(){
		return (
		<div class="com">
		<div class="compint">
			<input type="checkbox" onClick= {()=>{Filter.toErase = !Filter.toErase; this.fun(Filter.toErase)}}>
			</input>
			<label>Hide completed</label>
		</div></div>)
		;
	}
}

export {Filter};