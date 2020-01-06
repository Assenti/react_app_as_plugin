import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const Form = (props) => {
	const [lastName, setLastName] = useState('')
	const [firstName, setFirstName] = useState('')
	
	useEffect(() => {
		if (props.id == 1) {
			setFirstName('Asset')
			setLastName('Sultanov')
		} else if (props.id != 1) {
			setFirstName('Wrong ID')
			setLastName('')
		} else {
			setFirstName('Id has not been provided')
			setLastName('')
		}
	},[props.id])

	return (
		<div className="app">
			<div className="app-props">Passed id: {props.id}</div>
			<div className="app-props">Here is outside props about user: {firstName} {lastName}</div>
			<div className="buttons-container">
				<Button btnClass="btn" onAction={() => setFirstName('John')} name="Change"/>
				<Button btnClass="btn" onAction={() => setFirstName('Asset')} name="Return"/>
			</div>
		</div>
	);
}