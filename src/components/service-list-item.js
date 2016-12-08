import React, {Component} from 'react';

export default class ServiceListItem extends Component {
	constructor(props) {
		super(props);
		this.state = { selected: false };
		this.handleClickBindRoot = this.handleClick.bind(this);
	}

	componentDidMount() {
		if (this.props.index == 0) {
			this.handleServiceChange();
		}	
	}

	handleClick() {
		this.handleServiceChange();
	}

	handleServiceChange() {
		const deltaValue = (this.state.selected) ? (- this.props.value) : this.props.value;
		this.setState({ selected: !this.state.selected });
		this.props.onServiceChange(deltaValue);
	}

	render() {
		return (
			// stupid error: arrow function to call, dont rewrite on click function
			<li onClick={(e) => this.handleClickBindRoot(e)} className="service-item">
				<div className={`service-text-ctnr ${ (this.state.selected) ? "selected" : ""}`}>
					<span className="service-name">{this.props.name}</span>
					<span className="service-value">${this.props.value}</span>
				</div>
			</li>
		);
	}
}