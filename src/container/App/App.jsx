import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../container/Grid/Grid'


class App extends React.Component {
    constructor() {
        super();
        this.state ={
            generation : 0
        }
    }

    render () {
        return (
            <div>
                <h1>Game of Life</h1>
                <Grid />
                <h2>Generations: {this.state.generation}</h2>

            </div>
        )
    }
};

App.PropTypes = {
    generation : PropTypes.number
};

export default App;