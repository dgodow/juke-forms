import React from 'react';
import NewPlaylist from '../components/newplaylist'
import Songs from '../components/songs'
import axios from 'axios';

export default class NewPlaylistContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      noInput: true
    }

    this.manageInput = this.manageInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
    this.buttonDisabled = this.buttonDisabled.bind(this);
    this.noInputFlag = this.noInputFlag.bind(this);
  }

  noInputFlag () {
    this.setState({noInput: false})
  }

  manageInput (event) {
    if (this.state.noInput === true) {
      this.noInputFlag();
    }
    this.setState({inputValue: event.target.value});
  }

  buttonDisabled () {
    const value = this.state.inputValue;
    let disabled = true;

    if (value.trim().length === 0 || value.length > 16) {
      disabled = true;
      // this.setState({buttonDisabled: true});
    } else {
      disabled = false;
      // this.setState({buttonDisabled: false});
    }

    return disabled;
  }

  submitInput (event) {
    event.preventDefault();
    this.setState({inputValue: ''});
    axios.post('/api/playlists/', 
      {
        name: this.state.inputValue
      })
      .then(res => res.data)
      .then(result => {
        console.log(result) // response json from the server!
      });
  }

  render () {
    return (
      <div>
        <NewPlaylist 
          inputValue={this.state.inputValue}
          manageInput={this.manageInput} 
          submitInput={this.submitInput} 
          buttonDisabled={this.buttonDisabled()} 
          noInput={this.state.noInput}
        />
      </div>
    )
  }

}