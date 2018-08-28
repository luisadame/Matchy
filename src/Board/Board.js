import React, { Component } from 'react';
import Cell from '../Cell/Cell';
import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: this.props.size.split('x')[0],
            size: this.props.size.split('x').reduce((a, b) => a * b),
            cellSelected: null
        }
        this.words = ['Cow', 'Wallet', 'Phone', 'Wheel', 'Wind', 'Blur', 'Seashell', 'Smoke'];
        this.cells = Array(this.state.size).fill()
            .map((_, idx) => <Cell handleClick={this.handleCellClicks.bind(this)} key={idx} index={idx} />);
    }

    isPairCorrect(cell) {
        return cell.word === this.state.cellSelected.word;
    }

    checkCells(cell) {
        cell.setState(prevState => ({
            guessed: true
        }));
        this.state.cellSelected.setState(prevState => ({
            guessed: true
        }));
    }

    handleCellClicks(cell) {
        console.log(this.state);
        if (this.state.cellSelected && this.isPairCorrect(cell)) {
            this.checkCells(cell);
            this.setState(prevState => ({
                cellSelected: null
            }));
        } else {
            this.setState(prevState => ({
                cellSelected: cell
            }));
        }
    }

    render() {
        return (
            <div className="board" style={{ '--rows': this.state.rows }}>
                {this.cells}
            </div>
        );
    }
}

export default Board;
