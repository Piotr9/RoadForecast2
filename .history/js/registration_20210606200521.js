//const e = require("express");

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]')
    const email = document.querySelector('input[name="email"]')
    const pass = document.querySelector('input[name="pass"]')
    const pass2 = document.querySelector('input[name="pass2"]')

    console.log(1, pass);

    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, pass)
    .then((user) => loginUserSuccess(dispatch, user))
    .catch(() => createUserFail(dispatch));
})
