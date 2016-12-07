import React, {Component} from 'react';

export default class ServiceListItem extends Component {
	constructor(props) {
		super(props);
		this.handleClickBindRoot = this.handleClick.bind(this);
	}

	handleClick(e) {
		const elem = e.target;
		let deltaValue = 0;
		if (elem.classList.contains('selected')) {
			elem.classList.remove('selected');
			deltaValue = - this.props.value;
		} else {
			elem.classList.add('selected');
			deltaValue = this.props.value;
		}
		console.log("===Delta Value: ===: " + deltaValue);
		this.props.onServiceChange(deltaValue);
	}

	render() {
			return (
			<li onClick={this.handleClickBindRoot} className="service-item">
				<div className="service-text-ctnr">
					<span className="service-name">{this.props.name}</span>
					<span className="service-value">${this.props.value}</span>
				</div>
			</li>
		);
	}

}