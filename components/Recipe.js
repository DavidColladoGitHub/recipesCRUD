import React from 'react'

var Recipe = React.createClass({
  render () { return <div className="listLabel" onClick={this.props.onClick}>
    {this.props.name}
    </div>
  }
})

export default Recipe
