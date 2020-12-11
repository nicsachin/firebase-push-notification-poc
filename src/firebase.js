import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCaoICPg_REl8v06tBENWUbMnc243UkwmY",
    authDomain: "testpushnotification-c14dc.firebaseapp.com",
    databaseURL: "https://testpushnotification-c14dc.firebaseio.com",
    projectId: "testpushnotification-c14dc",
    storageBucket: "testpushnotification-c14dc.appspot.com",
    messagingSenderId: "1020349583409",
    appId: "1:1020349583409:web:423b3c28eb016d53d20510",
    measurementId: "G-XW0MG8K2WJ"
}

firebase.initializeApp(config);

export default firebase;