import React, { Component } from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
			<button type={ this.props.type } className={ this.props.class } disabled={ this.props.status } onClick={ this.props.eventClick }>{ this.props.text }</button>
			</>
		);
	}
}
