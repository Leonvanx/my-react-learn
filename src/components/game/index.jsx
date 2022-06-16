import { Component } from "react";
import "./game.css";
class Square extends Component {
  state = {
    squareValue: "",
  };
  render() {
    return (
      <button className="square" onClick={this.buttonClick}>
        {this.state.squareValue}
      </button>
    );
  }
  buttonClick = () => {
    this.setState((state) => ({
      squareValue: "X",
    }));
    setTimeout(() => {
      console.log(this.totalClick);
      // console.log(this.state.squareValue);
    }, 300);
    // this.props.addTotalClick();
    // console.log(this.props.squareNumber);
  };
}

class Board extends Component {
  state = {
    clickTotal: 0,
  };
  renderSquare(i) {
    return <Square squareNumber={i} addTotalClick={this.addTotalClick} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
  addTotalClick = () => {
    const newTotal = this.state.clickTotal + 1;
    this.setState((state) => ({
      clickTotal: newTotal,
    }));
    setTimeout(() => {
      console.log(this.state.clickTotal);
    }, 300);
  };
}

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
