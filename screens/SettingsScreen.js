import React, { Component } from 'react'
import { AsyncStorage, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

class SettingsScreen extends Component {
  facebookLogout = async () => {
    await AsyncStorage.removeItem('fb_token')
    console.log('Logged out!')
  }

  render () {
    return (
      <View>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Button
          title={'Log Out'}
          onPress={this.facebookLogout}
          buttonStyle={{ marginTop: 25 }}
        />
      </View>
    )
  }
}

export default SettingsScreen
