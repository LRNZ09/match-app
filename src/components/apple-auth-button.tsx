import styled, { css } from '@emotion/native'
import AppleAuth, {
  AppleButton,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
} from '@invertase/react-native-apple-authentication'
import firebase from '@react-native-firebase/app'
import React, { useCallback, useState } from 'react'
import { Alert, ActivityIndicator } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import Modal from 'react-native-modal'

import { signInOrShowCredentialAlert } from '~/auth'

const StyledAppleButton = styled(AppleButton)({
  aspectRatio: 1,
  height: 56,
  margin: 8,
})

const AppleAuthButton: React.FC = () => {
  const colorScheme = useColorScheme()
  const [isModalVisible, setModalVisible] = useState(false)

  const onPress = useCallback(async () => {
    try {
      const {
        email,
        fullName,
        identityToken,
        nonce,
      } = await AppleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [
          AppleAuthRequestScope.FULL_NAME,
          AppleAuthRequestScope.EMAIL,
        ],
      })

      if (!identityToken) throw new Error('Apple auth identity token is empty.')

      setModalVisible(true)

      const credential = firebase.auth.AppleAuthProvider.credential(
        identityToken,
        nonce
      )

      const { user } = await signInOrShowCredentialAlert({ credential, email })

      if (fullName) {
        const displayName =
          fullName.nickname ??
          [fullName.givenName, fullName.middleName, fullName.familyName]
            .filter(Boolean)
            .join(' ')

        if (displayName) await user.updateProfile({ displayName })
      }
    } catch (error) {
      // Sentry.captureException(e)

      Alert.alert(error.code, error.message)
    } finally {
      setModalVisible(false)
    }
  }, [])

  if (!AppleAuth.isSupported) return null

  const buttonStyle =
    colorScheme === 'dark' ? AppleButton.Style.WHITE : AppleButton.Style.BLACK

  return (
    <>
      <StyledAppleButton
        buttonStyle={buttonStyle}
        buttonType={AppleButton.Type.CONTINUE}
        cornerRadius={8}
        onPress={onPress}
      />

      <Modal isVisible={isModalVisible} useNativeDriver>
        <ActivityIndicator size='large' />
      </Modal>
    </>
  )
}

export default AppleAuthButton
