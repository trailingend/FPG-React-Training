import React from 'react';

const ServiceTotal = ({value}) => {

	return (
		<div className="service-total">
			<div className="service-text-ctnr">
				<span className="service-name">Total:</span>
				<span className="service-value">${value}</span>
			</div>
		</div>
	);
}

export default ServiceTotal;