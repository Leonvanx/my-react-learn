import React, { Component } from "react";
import Form from "./components/form";
import Table from "./components/table";
class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
    setTimeout(()=>{
      console.log(this.state.characters)
    },500)
  }
  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  
  render() {
    const characters = this.state.characters
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Form onFormSubmit={this.handleSubmit} />
        <Table characters={characters} removeCharacter={this.removeCharacter}/>
      </div>
    );
  }
}

export default App;
