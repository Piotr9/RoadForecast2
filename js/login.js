const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formDiv.querySelector('.error').innerHTML = "Loading...";
  const email = document.querySelector('input[name="email"]').value;
  const pass = document.querySelector('input[name="pass"]').value;

  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(email, pass)

  .then(user =>{
      console.log(user)
      window.location.pathname = './results.html'
  })
  .catch(err => formDiv.querySelector('.error').innerHTML = err.message)
});