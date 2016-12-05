import React from 'react';
import FilterInput from '../components/filterinput';
import Artists from '../components/artists';

export default class FilterableArtists extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    };

    this.manageInput = this.manageInput.bind(this);
    this.filterArtists = this.filterArtists.bind(this);
  }

  manageInput(event) {
    this.setState({inputValue: event.target.value});
  }

  filterArtists(inputValue) {
    return this.props.artists.filter((artist) => {
      return artist.name.match(`${inputValue}`);
    })
  }

  render () {
    const filteredArtists = this.filterArtists(this.state.inputValue)
    return (
      <div>
        <FilterInput manageInput={this.manageInput} />
        <Artists artists={filteredArtists} />
      </div>
    )
  }

}
