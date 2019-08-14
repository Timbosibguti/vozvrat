import React, { Component } from 'react';
import logo from '../../img/logo.png';

export class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="container">
					<a href="/"><img src={ logo } alt="logo" className="header__logo" /></a>
				</div>
			</header>
		);
	}
}
