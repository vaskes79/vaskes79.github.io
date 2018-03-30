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

const getDataOnce = async (ref) => {
  let refChild = DB.child(ref)

  let data = await refChild.once('value')
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return false
      }
    })
    .catch(err => { console.log(`getDataOnce error: ${err}`); return false;} )

  return data
}

export {getDataOnce, DB}
export default {DB}
