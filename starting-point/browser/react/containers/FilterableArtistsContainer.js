import React from 'react';
import FilterInput from './filterinput';
import Artists from './artists';

export default class FilterableArtists extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    };

    this.manageInput = this.manageInput.bind(this);
  }

  manageInput(inputValue) {
    this.setState(inputValue);
  }

  render () {
    const artists = this.state.inputValue;

    return (
      <FilterInput manageInput={this.manageInput} />
      artists.map((artist) => {
        return <Artists />
      })
    )
  }

}