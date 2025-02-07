import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
