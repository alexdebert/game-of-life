import React from 'react';
import PropTypes from 'prop-types';


import './Gird.css'

class Grid extends React.Component {

    render() {

    	const width = (this.props.cols * 14);
    	var rowArr = [];

    	var boxClass = "";

    	for(var i=0; i < this.props.rows; i++) {
    		for (var j=0; j < this.props.cols; j++) {
    			let boxId = [i]+"_"+[j];

    			boxClass = this.this.props.gridFull[i][j] ? "box on" : "box off";

    			rowArr.push(
    				<Box 
    					boxClass = {boxClass}
    					key = {boxId}
    					boxId = {boxId}
    					row = {i}
    					col = {j}
    					selectBox = {this.props.selectBox}
    				/>
    			)
    		}
    	}

        return (
            <div>
                GRID
            </div>
        )
    }
}

Grid.PropTypes = {
	cols : PropTypes.number,
	rows : PropTypes.number
}

export default Grid;