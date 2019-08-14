import React, { Component } from 'react';

export class Explanations extends Component {
	constructor(props) {
		super(props);
		this.steps = [
			{
				"icon": 'measuring-tape',
				"text": 'Бесплатный выезд замерщика <br /> <strong>(1 - 2 дня после заявки)</strong>'
			},
			{
				"icon": 'sketch',
				"text": 'Мастер замеряет участок <br /> и ведет рассчеты <strong>(2 - 3 часа)</strong>'
			},
			{
				"icon": 'web-optimization',
				"text": 'Индивидуальный рекомендации <br /> по проекту'
			},
			{
				"icon": 'debt',
				"text": 'Готовая смета <br /> дизайн-проекта'
			}
		]
	}

	render() {
		return (
			<div className="section explanations">
				<div className="container">
					<ul className="list-inline explanations__list">
						{
							this.steps.map((step, key) => {
								return (
									<li className="explanations__item" key={key}>
										<i className={'explanations__icon icon-' + step.icon}></i>
										<p dangerouslySetInnerHTML={{__html: step.text}} />
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}
