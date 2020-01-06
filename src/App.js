import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form } from './components/Form';

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            uId: new URLSearchParams(window.location.search).get('id') || ''
        }
        window.__PLUGIN__ = this
    }
    
    setId(_id) {
        this.setState({ uId: _id })
    }

    render() {
        return (
            <div className="app">
                <h1>This Embedded React app</h1>
                <Form id={this.state.uId}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('plugin'));