(function(){
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'index.html',
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: 'index.html',
        // Privacy policy url.
        privacyPolicyUrl: 'index.html'
      };

      const form = document.querySelector('form');

  form.addEventListener('submit', () => {
      e.preventDefault();
      const email = document.querySelector('input[name="email"]')
      const pass = document.querySelector('input[name="pass"]')
      console.log(email, pass);
})


      ui.start('#firebaseui-auth-container', uiConfig);
})()

