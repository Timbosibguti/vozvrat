import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import Button from '../objects/button.jsx';

export class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			phone: '',
			address: '',
			surface: '',
			step: 1,
			btnDisabled: true,
			left: '0'
		}
		

		this.handleChange = this.handleChange.bind(this);
		this.handlePrevStep = this.handlePrevStep.bind(this);
		this.handleNextStep = this.handleNextStep.bind(this);
	}

	updateBtnsStatus() {
		setTimeout(() => {
			if(this.state.step == 1 && this.state.name && this.state.phone) {
				this.setState({
					btnDisabled: false,
				});
			} else if(this.state.step == 2 && this.state.surface && this.state.address) {
				this.setState({
					btnDisabled: false,
				});
			} else {
				this.setState({
					btnDisabled: true,
				});
			}
		}, 100);
	}

	handleChange(e) {
		let name = e.target.name,
			value = e.target.value;

		if(name == 'name') {

			this.setState({
				name: value
			});

		} else if(name == 'phone') {

			this.setState({
				phone: value
			});

		} else if(name == 'address') {

			this.setState({
				address: value
			});

		} else if(name == 'surface') {

			this.setState({
				surface: value
			});

		}

		this.updateBtnsStatus();
	}

	handlePrevStep(e) {
		this.setState({
			step: this.state.step - 1
		});
		this.state.left="0";
		this.updateBtnsStatus();
	}

	handleNextStep(e) {
		this.setState({
			step: this.state.step + 1
		});
		this.state.left="-100%";

		this.updateBtnsStatus();
	}

	render() {
		return (
			<form className="section form" method="POST" id="zamer_landing_form" action="https://mos-bruschatka.ru/index.php?route=checkout/success">
				<div className="container">
					<div className="form__inner">
						<p className="h2 text-primary font-weight-bold form__title">Профессиональный расчет с экспертом бесплатно</p>
						<p className="form__description">Оставте заявку на <strong>бесплатный</strong> выезд и расчет сметы по вашему проекту"</p>
										<div className="form-main">
											<div className="form-block" style={{left:this.state.left}}>
												<input name="name" required value={ this.state.name } placeholder="Имя" className="form-control mb-1" onChange={ this.handleChange }/>
												<InputMask mask="+7 (999) 999-99-99" maskChar={null} name="phone" required value={ this.state.phone } placeholder="Телефон" className="form-control mb-1" onChange={ this.handleChange }/>
												<Button type="button" text="Далее" class="mb-1 btn btn-primary icon-chevron-right next-step" status={ this.state.btnDisabled } eventClick={ this.handleNextStep } />
											</div>
											<div className="form-block" style={{left:this.state.left}}>
												<input name="address" required value={ this.state.address } placeholder="Адрес" className="form-control mb-1" onChange={ this.handleChange }/>
												<input name="surface" required value={ this.state.surface } placeholder="Площадь" className="form-control mb-1" onChange={ this.handleChange }/>
												<div className="form__btns">
													<Button type="button" text="Назад" class="mb-1 btn btn-outline-light text-dark mr-1 icon-chevron-left" eventClick={ this.handlePrevStep } />
													<Button type="submit" status={ this.state.btnDisabled } class="mb-1 btn btn-primary sent" text="Отправить" />
												</div>
											</div>
										</div>
					</div>
				</div>
			</form>
		);
	}
}
