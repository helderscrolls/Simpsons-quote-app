import React from 'react';
import './Random.css';

class Random extends React.Component {
  state = {
    charactersList: [],
    isloading: true,
    character: '',
  };

  fetchCharacters() {
    fetch('https://melroune.github.io/starwars-api/api/all.json')
      .then(res => res.json())
      .then(res =>
        this.setState({
          charactersList: res,
          character: res[this.random(87)],
          isloading: false,
        }),
      );
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  random = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  handleClick = () => {
    this.setState({ character: this.state.charactersList[this.random(87)] });
  };

  render() {
    return (
      <>
        <ul>
          <li>Name :{this.state.character.name}</li>
          <li>Height :{this.state.character.height}</li>
          <li>Mass :{this.state.character.mass}</li>
          <li>Gender :{this.state.character.gender}</li>
          <li>Homeworld :{this.state.character.homeworld}</li>
          <li>Wiki :{this.state.character.wiki}</li>
          <li>
            <img
              className="imgCharacter"
              src={this.state.character.image}
              alt={this.state.character.name}
            ></img>
          </li>
          <li>Born :{this.state.character.born}</li>
          <li>Born Location :{this.state.character.bornLocation}</li>
          <li>Died :{this.state.character.died}</li>
          <li>Death Location :{this.state.character.diedLocation}</li>
          <li>Species :{this.state.character.species}</li>
          <li>Eye Color:{this.state.character.eyeColor}</li>
          <li>Hair Color :{this.state.character.hairColor}</li>
          <li>Skin Color:{this.state.character.skinColor}</li>
          <li>Cybernetics :{this.state.character.cybernetics}</li>
        </ul>

        <button className="NewCharacterButton" onClick={this.handleClick}>
          Get New Character
        </button>
      </>
    );
  }
}

export default Random;
