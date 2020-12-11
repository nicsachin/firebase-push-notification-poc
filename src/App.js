import logo from './logo.svg';
import './App.css';

import firebase from "./firebase";
import {useEffect, useState} from "react";

function App() {

    const [count , setCount] = useState(0);
    useEffect(() => {
        //
        // if ('serviceWorker' in navigator) {
        //     navigator.serviceWorker.register('../firebase-messaging-sw.js')
        //         .then(function (registration) {
        //             console.log('Registration successful, scope is:', registration.scope);
        //         }).catch(function (err) {
        //         console.log('Service worker registration failed, error:', err);
        //     });
        // }

        console.log("******")
        // async function getFCMToken() {
        //
        //     try {
        //         const messaging = firebase.messaging();
        //         const token = await messaging.requestPermission().then(token => {
        //             return messaging.getToken()
        //         })
        //         const pushTokenToBackend = await fetch(`http://3.6.160.70:3000/v1/app?token=${token}`)
        //         console.log('token is ', pushTokenToBackend);
        //     } catch (e) {
        //         console.log(e);
        //     }
        // }
        //
        // getFCMToken();

    } , [count])

    return (
            <button onClick={()=>{setCount(count+1)}}>
                add
                {count}
            </button>

    );
}

export default App;
