import { AsyncStorage } from 'react-native'
import { Facebook } from 'expo'

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types'

export const facebookLogin = () => async dispatch => {
  // use let with await to set up promise handling
  let token = await AsyncStorage.getItem('fb_token')

  if (token) {
    // dispatch action saying fb login complete
    console.log('yes token')
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
  } else {
    // start fb login process
    console.log('no token')
    doFacebookLogin(dispatch)
  }
}

const doFacebookLogin = async dispatch => {
  let { token, type } = await Facebook.logInWithReadPermissionsAsync('240386899771234', {
    permissions: ['public_profile']
  })

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL })
  }

  await AsyncStorage.setItem('fb_token', token)
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
}
