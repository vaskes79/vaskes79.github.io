import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TestComponent.css'

const ExampleComponent = ({hide}) => {
  const componentClasses = ['example-component']
  if (hide) { componentClasses.push('hide') }

  return (
    <div className={componentClasses.join(' ')}>example</div>
  )
}

ExampleComponent.propTypes = {
  hide: React.PropTypes.bool.isRequired
}

class TestComponent extends Component {

  state={
    hide: false
  }

  render() {
    return (
      <div className="TestComponent">
        <button onClick={() => this.setState({hide: !this.state.hide})}>show component</button>
        <br />
        <ExampleComponent hide={this.state.hide}/>
        <br />
        <h1>Vaskes</h1>
      </div>
    )
  }
}

export default TestComponent;
