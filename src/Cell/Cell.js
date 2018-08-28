import React, { Component } from 'react';
import './Cell.css';
import questionMark from './qMark.svg';
import Board from '../Board/Board';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index,
            isClicked: false,
            isGuessed: false
        }
        this.word = "Hello";
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.handleClick(this);
        this.setState(prevState => ({
            isClicked: true
        }));
        setTimeout(() => {
            this.setState(prevState => ({
                isClicked: false
            }));
        }, 1000);
    }

    render() {
        return (
            <div className="cell" onClick={this.handleClick}>
                {this.state.isClicked ? (
                    this.word
                ) : (
                        <img src={questionMark} alt="Question mark" />
                    )}
            </div>
        );
    }
}

export default Cell;
