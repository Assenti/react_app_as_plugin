import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

const App = (props) => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log(id)
    return (
        <div className="app">
            <h1>This Embedded React app</h1>
            <Form id={id}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('plugin'));