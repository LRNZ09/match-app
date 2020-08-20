import firebase from '@react-native-firebase/app'
import _ from 'lodash'
import { Alert } from 'react-native'

const getMethodName = (method) => {
  if (method === firebase.auth.EmailAuthProvider.PROVIDER_ID)
    return 'email and password'

  const [lowerName] = method.split('.')
  const name = _.startCase(lowerName)
  return name
}

const signInOrShowCredentialAlert = async ({ credential, email = null }) => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithCredential(credential)

    return userCredential
  } catch (error) {
    if (error.code !== 'auth/account-exists-with-different-credential')
      throw error

    const userEmail = error.email ?? email
    if (!userEmail) return

    // If the user has several sign-in methods,
    // the first method in the list will be the "recommended" method to use.
    const [method] = await firebase.auth().fetchSignInMethodsForEmail(userEmail)

    const methodName = getMethodName(method)
    const errorMethodName = getMethodName(credential.providerId)

    Alert.alert(
      `Continue with ${methodName} first`,
      `You will be able to link ${errorMethodName} on your profile later.`
    )
  }
}

export { signInOrShowCredentialAlert }
