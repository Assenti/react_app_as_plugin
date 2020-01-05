import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const Form = (props) => {
  const [lastName, setLastName] = useState(props.lastName)
  const [firstName, setFirstName] = useState(props.firstName)
  
  useEffect(() => {
    if (props.id == 1) {
      setFirstName('Asset')
      setLastName('Sultanov')
    } else {
      setFirstName('Id has not been provided')
    }
  },[])

  return (
      <div className="app">
        <div className="app-props">Here is outside props about user: {firstName} {lastName}</div>
        <Button btnClass="delete-btn" onAction={() => setFirstName('John')} name="Change"/>
        <button className="delete-btn" onClick={() => setFirstName('Asset')}>Return</button>
      </div>
  );
}