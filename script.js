const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDT8A3yMsvc2syDg-T1rjSTPVb_C2g9FlI",
    authDomain: "testright-assignment.firebaseapp.com",
    databaseURL: "https://testright-assignment-default-rtdb.firebaseio.com",
    projectId: "testright-assignment",
    storageBucket: "testright-assignment.appspot.com",
    messagingSenderId: "415502574394",
    appId: "1:415502574394:web:c4421f44b5b47265cfe603",
    measurementId: "G-Q8R8TVWEP3"

});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.href = "MainScreen.html";
            // document.write("You are Signed In")
            // console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}
