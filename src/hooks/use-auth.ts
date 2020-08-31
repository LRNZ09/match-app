import firebase from '@react-native-firebase/app'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useEffect, useState } from 'react'

type AuthUser = FirebaseAuthTypes.User | null

const useAuth = (): { user: AuthUser } => {
	const [user, setUser] = useState<AuthUser>()

	useEffect(() => firebase.auth().onAuthStateChanged((u) => setUser(u)), [])

	return { user }
}

export default useAuth
