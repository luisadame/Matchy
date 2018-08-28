import React, { Component } from 'react';
import Cell from '../Cell/Cell';
import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: this.props.size.split('x')[0],
            size: this.props.size.split('x').reduce((a, b) => a * b),
            pairSelected: []
        }
        this.words = ['Cow', 'Wallet', 'Phone', 'Wheel', 'Wind', 'Blur', 'Seashell', 'Smoke'];
    }

    handleCellClicks(cell) {
        console.log(this, cell);
    }

    render() {
        const cells = Array(this.state.size).fill().map((_, idx) => <Cell key={idx} index={idx} handleClick={this.handleCellClicks.bind(this)} />);
        return (
            <div className="board" style={{ '--rows': this.state.rows }}>
                {cells}
            </div>
        );
    }
}

export default Board;
