import React, { Component } from 'react';
import './Cell.css';
import questionMark from './qMark.svg';
import check from './check.svg';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index,
            isClicked: false,
            guessed: false
        }
        this.word = this.props.word;
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
        const guessed = this.state.guessed;
        let content;

        if (guessed) {
            content = <img src={check} alt="Check mark" />;
        } else {
            content = this.state.isClicked ? this.word : <img src={questionMark} alt="Question mark" />;
        }

        return (
            <div className="cell" onClick={this.handleClick}>
                {content}
            </div>
        );
    }
}

export default Cell;
