import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchCharacterDetails } from './character-details.actions';

class CharacterDetails extends Component {
  componentDidMount() {
    const characterName = this.props.match.params.name;
    this.props.fetchCharacterDetails(characterName);
  }

  render() {
    return this.props.characterDetails.character === null
      ?  <h1>Not Found</h1>
      : this.renderCharacterDetails();
  }

  renderCharacterDetails() {
    return <h1>{this.props.characterDetails.character.name}</h1>;
  }
}

CharacterDetails = withRouter(CharacterDetails);

CharacterDetails = connect(
  ({ ui: { characterDetails } }) => ({ characterDetails }),
  { fetchCharacterDetails },
)(CharacterDetails);

export default CharacterDetails;
