import React, {Component} from 'react';

export default class ServiceListItem extends Component {
	constructor(props) {
		super(props);
		this.handleClickBindRoot = this.handleClick.bind(this);
	}

	componentDidMount(e) {
		if (this.props.index == 0) {
			var elem = document.querySelector(".service-text-ctnr:first-child");
			this.doSelection(elem);
		}
	}

	handleClick(e) {
		this.doSelection(e.target);
	}

	doSelection(elem) {
		let deltaValue;
		if (elem.classList.contains('service-text-ctnr')) {
			deltaValue = this.toggleClass(elem, 'selected');
			this.props.onServiceChange(deltaValue);
		}
	}

	toggleClass(elem, className) {
		let deltaValue = 0; 
		if (elem.classList.contains(className)) {
			elem.classList.remove(className);
			deltaValue = - this.props.value;
		} else {
			elem.classList.add(className);
			deltaValue = this.props.value;
		}
		return deltaValue;
	}

	render() {
		return (
			// stupid error arrow function to call, dont rewrite on click function
			<li onClick={(e) => this.handleClickBindRoot(e)} className="service-item">
				<div className="service-text-ctnr">
					<span className="service-name">{this.props.name}</span>
					<span className="service-value">${this.props.value}</span>
				</div>
			</li>
		);
	}
}