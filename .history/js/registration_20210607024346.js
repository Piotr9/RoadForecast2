//const e = require("express");

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const pass = document.querySelector('input[name="pass"]').value;
    const pass2 = document.querySelector('input[name="pass2"]').value;

    console.log(email, pass);

    //const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, pass)

    .then(cred => loginUserSuccess(dispatch, cred))
    // .catch(() => createUserFail(dispatch));
    .catch(err => form.querySelector('.error').innerHTML = err.message)

});

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then() => {
        console.log(LogOut);
    };
});