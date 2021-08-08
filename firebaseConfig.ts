import '@firebase/auth';
import '@firebase/firestore';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCCwwy6Z1Q8Ja6jgbOVKUX_M0H_eN6_Qjo",
    authDomain: "techchat-2062a.firebaseapp.com",
    projectId: "techchat-2062a",
    storageBucket: "techchat-2062a.appspot.com",
    messagingSenderId: "952917137531",
    appId: "1:952917137531:web:f3d1aad9e0475eca12aade"
}

const currentUserID = 'yZGSDKcSnnzYZaftTwcm'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase, currentUserID };
