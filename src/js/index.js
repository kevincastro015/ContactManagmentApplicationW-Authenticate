//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

//firebase
var firebaseConfig = {
	apiKey: "AIzaSyA6u-vLgyigWzQu41x_jw96Lf-6dE8dElc",
	authDomain: "authenticate-exercise.firebaseapp.com",
	projectId: "authenticate-exercise",
	storageBucket: "authenticate-exercise.appspot.com",
	messagingSenderId: "693079067731",
	appId: "1:693079067731:web:d82b988d38caf4ad828aa6",
	measurementId: "G-ECSKBX00DP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
