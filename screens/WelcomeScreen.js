import _ from 'lodash'
import React, { Component } from 'react'
import { AsyncStorage, Text, View } from 'react-native'
import { AppLoading } from 'expo'
import Slides from '../components/Slides'

const SLIDE_DATA = [
  {
    text: 'Welcome to JobApp',
    color: '#03A9F4'
  },
  {
    text: 'Use this app to find jobs where you want to work',
    color: '#ED5Eb4'
  },
  {
    text: 'Set your location and start swiping',
    color: '#03A9F4'
  }
]

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount () {
    let token = await AsyncStorage.getItem('fb_token')

    if (token) {
      this.props.navigation.navigate('map')
      this.setState({ token })
    } else {
      this.setState({ token: false })
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render () {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    )
  }
}

export default WelcomeScreen
