const firebase = require('firebase')
const fetch = require('node-fetch')
require('firebase/firestore')
const url = "https://assets.breatheco.de/apis/fake/contact/";

var firebaseConfig = {
    apiKey: "AIzaSyA6u-vLgyigWzQu41x_jw96Lf-6dE8dElc",
    authDomain: "mdc-14-authentication.firebaseapp.com",
    projectId: "mdc-14-authentication",
    storageBucket: "mdc-14-authentication.appspot.com",
    messagingSenderId: "693079067731",
    appId: "1:693079067731:web:d82b988d38caf4ad828aa6",
    measurementId: "G-ECSKBX00DP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

const populateFirebase = (collectionName, items) => {
    return Promise.all(
        items && items.map((item) => {
            const { id, ...data } = item;
            return db.collection(collectionName).doc(id).set(data)
        })
    )
}
const getContacts = () => {
    fetch(url + "agenda/kevincastro015")
        .then((res) => res.json())
        .then((response) => contacts = response).then(() => Promise.all([
            populateFirebase('contacts', contacts)
        ]))
        .then(() => {
            console.log("done")
            process.exit(0)
        }).catch((err) => console.log(err))
}
getContacts()