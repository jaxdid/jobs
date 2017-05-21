import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux' // used to connect action creator to a component
import * as actions from '../actions'

class AuthScreen extends Component {
  componentDidMount () {
    this.props.facebookLogin() // async
    this.onAuthComplete(this.props) // optional
  }

  // user has just successfully logged in
  componentWillReceiveProps (nextProps) {
    this.onAuthComplete(nextProps)
  }

  onAuthComplete (props) {
    if (props.token) {
      this.props.navigation.navigate('map')
    }
  }

  render () {
    return <View />
  }
}

// destructure auth from state
function mapStateToProps ({ auth }) {
  return { token: auth.token }
}

// first arg is mapStateToProps, but no state in this component
export default connect(mapStateToProps, actions)(AuthScreen)
