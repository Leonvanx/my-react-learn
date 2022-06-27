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
    const squareItemInfo = {
      squareNumber: this.props.squareNumber,
      squareValue: this.props.isXNext ? "X" : "O",
    };
    this.props.onClick(squareItemInfo);
    if (this.state.squareValue === "") {
      this.setState((state) => ({
        squareValue: this.props.isXNext ? "X" : "O",
      }));
    }
    // setTimeout(() => {
    //   // console.log(this.totalClick);
    //   console.log(this.state.squareValue);
    // }, 300);
    // console.log(this.props.squareNumber);
  };
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareAllInfo: Array(9).fill(null),
      isXNext: true,
    };
  }
  renderSquare(i) {
    return (
      <Square
        squareNumber={i}
        isXNext={this.state.isXNext}
        onClick={this.handleAddTotalClick}
      />
    );
  }

  render() {
    let status;
    const whichWin = this.calculateWinner(
      this.state.squareAllInfo
    )?.squareValue;
    if (whichWin) {
      status = "Winner: " + whichWin;
    } else {
      status = "Next player: " + (this.state.isXNext ? "X" : "O");
    }
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
  handleAddTotalClick = (squareItemInfo) => {
    const index = squareItemInfo.squareNumber;
    const updateArr = this.state.squareAllInfo;
    updateArr[index] == null && (updateArr[index] = squareItemInfo);
    this.setState((state) => ({
      squareAllInfo: updateArr,
      isXNext: !this.state.isXNext,
    }));
    const whichWin = this.calculateWinner(
      this.state.squareAllInfo
    )?.squareValue;
    if (whichWin) {
      return;
    }
    // console.log(this.state.squareAllInfo);

    // setTimeout(() => {
    //   console.log(this.state.isXNext);
    // }, 300);
  };
  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a]?.squareValue === squares[b]?.squareValue &&
        squares[a]?.squareValue === squares[c]?.squareValue
      ) {
        return squares[a];
      }
    }
    return null;
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
