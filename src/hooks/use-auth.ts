import firebase from '@react-native-firebase/app'
import { useState, useEffect } from 'react'

const useAuth = (): firebase.User | null => {
  const [user, setUser] = useState<firebase.User>(null)

  useEffect(() => firebase.auth().onAuthStateChanged(setUser), [])

  return { user }
}

export default useAuth
