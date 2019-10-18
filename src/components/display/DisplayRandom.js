import React from 'react';

class DisplayRandom extends React.Component {
  state = {
    tabCharacter: '',
  };

  componentDidMount() {
    this.handleClick();
  }

  random = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  handleClick = () => {
    this.setState({ tabCharacter: this.state.characters[this.random(87)] });

    console.log(this.state.characters);
  };

  render() {
    if (this.props.isLoading) {
      return <div>Loading…</div>;
    }
    return (
      <div>
        <img
          className="imgCharacter"
          src={this.props.characters.image}
          alt={this.props.characters.name}
        />
        <p>{this.props.characters.name}</p>
      </div>
    );
  }
}

export default DisplayRandom;
