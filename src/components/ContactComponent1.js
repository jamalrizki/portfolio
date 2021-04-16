import React, { Component } from 'react';
import JotformEmbed from 'react-jotform-embed';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <JotformEmbed src="https://form.jotform.com/210117134492143"/>
                
            </div>
            
        );
    }
}

export default App;