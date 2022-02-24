import React from 'react';
import TransportingApp from './mod1lab.jsx';
import TriviaApp from './mod2lab.jsx';
import Students from './mod3lab.jsx';

export default class WpApp extends React.Component {
    constructor (props) {
        super(props);
    }
    
    sum(x, y) {
      return x + y;
    }
    
    render () {
        const numbers = [2, 2];
        console.log ( this.sum (...numbers) );
        return (
            <div>
				<TransportingApp />
				<TriviaApp />
				<Students />
            </div>
        );
    }
}
