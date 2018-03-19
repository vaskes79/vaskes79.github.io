import * as firebase from 'firebase'

const {
  VPORT_API_KEY,
  VPORT_AUTH_DOMAIN,
  VPORT_DATABASE_URL,
  VPORT_PROJECT_ID,
  VPORT_STORAGE_BUCKET,
  VPORT_MESSAGING_SENDERID
} = process.env;

var CONFIG = {
  apiKey: VPORT_API_KEY,
  authDomain: VPORT_AUTH_DOMAIN,
  databaseURL: VPORT_DATABASE_URL,
  projectId: VPORT_PROJECT_ID,
  storageBucket: VPORT_STORAGE_BUCKET,
  messagingSenderId: VPORT_MESSAGING_SENDERID,
}

firebase.initializeApp(CONFIG)

const DB = firebase.database().ref('v-port')

export default {DB}
