import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
	this.state = {name:this.props.name}
    // Poniższe wiązanie jest niezbędne do prawidłowego przekazania `this` przy wywołaniu funkcji    
	this.handleClick = this.handleClick.bind(this); 
	}

  handleClick(e) {
	  this.setState(state => ({
		  isToggleOn: !state.isToggleOn
		  }));
	}
  render() {
	if (this.props.filter && this.state.isToggleOn) return "";
	var className = (this.state.isToggleOn)? "TaskOff":"TaskOn";
	return (
		<div id={this.props.id} className={"Task"}>
			<input type="checkbox" onChange={this.handleClick} checked={this.state.isToggleOn}>
			</input>
			<span className={className}>{this.state.name}</span>
		</div>
		
	)
  }
}


export {Task};