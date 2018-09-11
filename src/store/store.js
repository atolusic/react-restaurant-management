import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
// Reducers
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import orderReducer from "./reducers/orderReducer";

// firebase cfg
var firebaseConfig = {
  apiKey: "AIzaSyDF5dXIPfm4pGAbD6ko5inODtOqW6e6fuo",
  authDomain: "zavrsni-rad-458a9.firebaseapp.com",
  databaseURL: "https://zavrsni-rad-458a9.firebaseio.com",
  projectId: "zavrsni-rad-458a9",
  storageBucket: "zavrsni-rad-458a9.appspot.com",
  messagingSenderId: "755526337070"
};

// react-redux-firebase cfg
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// init firebase instance
firebase.initializeApp(firebaseConfig);
// init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// root reducer
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  orders: orderReducer
});

// Create init state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(reactReduxFirebase(firebase))
);

export default store;
