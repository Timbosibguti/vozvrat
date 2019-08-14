import React, { Component } from 'react';

export class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<div className="footer__row">
						<p className="footer__col">© 2019 Мосбрусчатка</p>
						<p className="footer__col"><a href="tel:+78633222287" className="font-weight-bold roistat-phone">+7 (863) 322-22-87</a> <br /> Кутузовский проспект, 36</p>
					</div>
				</div>
			</footer>
		);
	}
}
