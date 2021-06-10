const form = document.querySelector('form');

form.addEventListener('submit', () => {
    const name = document.querySelector('input[name="name"]')
    const email = document.querySelector('input[name="email"]')
    const pass = document.querySelector('input[name="pass"]')
    const pass2 = document.querySelector('input[name="pass2"]')

    const auth = firebase.auth();
    auth.createUserWith
})
