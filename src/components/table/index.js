import React, { Component } from "react";

import TableHeader from "./head";
import TableBody from "./body";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state.characters = props.characters;
  }
  state = {
    characters: [],
  };
  removeCharacter = (index) => {
    this.props.removeCharacter(index)
  };
  // removeCharacter = (index) => {
  //   const { characters } = this.state;

  //   this.setState({
  //     characters: characters.filter((character, i) => {
  //       return i !== index;
  //     }),
  //   });
  // };
  render() {
    const { characters } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody
          tableData={characters}
          removeCharacter={this.removeCharacter}
        />
      </table>
    );
  }
}
export default Table;
