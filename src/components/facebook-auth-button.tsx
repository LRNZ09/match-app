import { css } from '@emotion/native'
import firebase from '@react-native-firebase/app'
import React, { useCallback, useState } from 'react'
import { Alert, ActivityIndicator, Text } from 'react-native'
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/Ionicons'

import { signInOrShowCredentialAlert } from '~/auth'

import Button from './button'

const LOGIN_PERMISSIONS = ['email', 'public_profile']

const getFacebookUser = () =>
  new Promise((resolve, reject) => {
    new GraphRequestManager()
      .addRequest(
        new GraphRequest('/me?fields=email,name', null, (error, result) => {
          if (error) reject(error)
          else resolve(result)
        })
      )
      .start()
  })

const FacebookAuthButton: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  const onPress = useCallback(async () => {
    try {
      const { isCancelled } = await LoginManager.logInWithPermissions(
        LOGIN_PERMISSIONS
      )
      if (isCancelled) return

      setModalVisible(true)

      const { accessToken } = await AccessToken.getCurrentAccessToken()
      if (!accessToken) throw new Error('Error obtaining access token.')

      const credential = firebase.auth.FacebookAuthProvider.credential(
        accessToken
      )
      const { email } = await getFacebookUser()

      await signInOrShowCredentialAlert({ credential, email })
    } catch (error) {
      // Sentry.captureException(e)

      Alert.alert(error.code, error.message)
    } finally {
      setModalVisible(false)
    }
  }, [])

  return (
    <>
      <Button
        backgroundColor='rgb(54, 120, 234)'
        color='whitesmoke'
        onPress={onPress}
      >
        <Button.Icon name='material-facebook' />
      </Button>

      <Modal isVisible={isModalVisible} useNativeDriver>
        <ActivityIndicator size='large' />
      </Modal>
    </>
  )
}

export default FacebookAuthButton
