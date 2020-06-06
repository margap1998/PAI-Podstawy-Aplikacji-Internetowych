import React from 'react';

class Task extends React.Component {
  constructor(props) {
	super(props);
	this.state = {name:this.props.name, isToggleOn:this.props.checked}   
	this.handleClick = this.handleClick.bind(this); 
	this.input = React.createRef();
	}

  handleClick() {
	  this.setState(state => ({
		  isToggleOn: this.input.current.checked
		  }));
		  this.props.onClick(this.props.id,!this.input.current.checked);
	}
  render() {
	if (this.props.filter && this.state.isToggleOn) return "";
	var className = (this.state.isToggleOn)? "TaskOff":"TaskOn";
	return (
		<label id={this.props.id} className={"Task"}>
			<input 
				name={this.state.name}
				type="checkbox" 
				onChange={this.handleClick}
				ref={this.input}
				checked={this.state.isToggleOn}
				/>
			<span className={className}>{this.state.name}</span>
		</label>
		
	)
  }
}


export {Task};