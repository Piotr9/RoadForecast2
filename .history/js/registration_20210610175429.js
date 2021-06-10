//const e = require("express");

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const pass = document.querySelector('input[name="pass"]').value;
    const pass2 = document.querySelector('input[name="pass2"]').value;


    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, pass)

    .then(user =>{
        console.log(user)
        window.location.pathname = './index.html'
    })
    .catch(err => form.querySelector('.error').innerHTML = err.message)
});

