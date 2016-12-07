import React, {Component} from 'react';
import ServiceListItem from './service-list-item';

//props are inputs from parent js
const ServiceList = (props) => {
	const serviceItems = props.dataMap.map( (data) =>{
		return (
			<ServiceListItem 
				name = { data.name }
				value = { data.value } 
				key = { data.name }
				onServiceChange = {props.onServiceChange }
			/>
		)
	});

	return (
		<ul className="services-ul">
			{ serviceItems }
		</ul>
	);
}

export default ServiceList;