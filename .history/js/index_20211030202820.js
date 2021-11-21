document.addEventListener("DOMContentLoaded", () => {
  const auth = firebase.auth();
  const user = auth.currentUser;

  console.log(user)

  // if(!user){
  //   window.location.pathname = './login.html'
  // }
});

