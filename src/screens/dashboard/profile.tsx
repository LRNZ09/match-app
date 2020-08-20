import firebase from '@react-native-firebase/app'
import React, { useCallback } from 'react'
import { Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

const Profile: React.FC = () => {
  const onPress = useCallback(async () => {
    await firebase.auth().signOut()

    Alert.alert('Successfully logged out!')
  }, [])

  return (
    <ScrollView contentInsetAdjustmentBehavior='automatic'>
      <Icon.Button name='exit' onPress={onPress}>
        Logout
      </Icon.Button>
    </ScrollView>
  )
}

export default Profile
