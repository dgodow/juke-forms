import React from 'react';
import Songs from './Songs';

export default class Playlist extends React.Component {
  constructor(props) {
    super(props)

  }

componentDidMount () {
  const playlistId = this.props.routeParams.playlistId;
  this.props.selectPlaylist(playlistId);
}

componentWillReceiveProps(){
  const playlistId = this.props.routeParams.playlistId;
  if (playlistId !== this.props.selectPlaylist.id) {
    this.props.selectPlaylist(playlistId)
  }
}

render() {
    const playlist = this.props.selectedPlaylist;
    console.log(playlist)

    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    )
  }
}
