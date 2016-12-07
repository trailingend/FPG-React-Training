import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ServiceList from './components/service-list';
import ServiceTotal from './components/service-total';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataMap : [
				{ name: "Web Development", value: 300 },
				{ name: "Design", value: 400 },
				{ name: "Integration", value: 250 },
				{ name: "Training", value: 220 }
			],
			totalValue : 0
		};
	}

	render() {
		return (
			<div className = "services-ctnr">
				<h1 className="service-title">Services</h1>
				<ServiceList 
					dataMap = { this.state.dataMap } 
					onServiceChange = { (deltaValue) => this.setState({totalValue: this.state.totalValue + deltaValue}) }
				/>
				<ServiceTotal value = {this.state.totalValue} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));