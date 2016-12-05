import React from 'react';

export default class NewPlaylist extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.props.submitInput}>
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input value={this.props.inputValue} className="form-control" onChange={this.props.manageInput} type="text"/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" disabled={this.props.buttonDisabled}>Create Playlist</button>
              </div>
            </div>
            {
              (this.props.buttonDisabled === true && this.props.noInput === false)
              ? <div className="alert alert-warning">Please enter a name</div>
              : null
            }
          </fieldset>
        </form>
      </div>
    )
  }
}