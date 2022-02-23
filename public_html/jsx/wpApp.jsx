import React from 'react';

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
             
            </div>
        );
    }
}
