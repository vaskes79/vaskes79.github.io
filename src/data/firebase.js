import * as firebase from 'firebase'
import CONFIG from './firebase-env'

firebase.initializeApp(CONFIG)

const DB = firebase.database().ref('v-port')

export default {DB}
