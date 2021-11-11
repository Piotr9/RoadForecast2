const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector('input[name="email"]').value;
  const pass = document.querySelector('input[name="pass"]').value;

  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(email, pass)

  .then(user =>{
      console.log(user)
      window.location.pathname = './results.html'
  })
  .catch(err => form.querySelector('.error').innerHTML = err.message)
});