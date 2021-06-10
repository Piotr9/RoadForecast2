const form = document.querySelector('form');

form.addEventListener('submit', () => {
    // e.preventDefault();
    const name = document.querySelector('input[name="name"]')
    const email = document.querySelector('input[name="email"]')
    const pass = document.querySelector('input[name="pass"]')
    const pass2 = document.querySelector('input[name="pass2"]')

    console.log(email, password);

    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, password)
    .then((user) => loginUserSuccess(dispatch, user))
    .catch(() => createUserFail(dispatch));
})
