// window.onload = ;
window.onload = function() {
    const firestore = firebase.firestore();

    const asa = firestore.collection('search_result').doc('elementsHTML');
    const ada = await asa.get();
    console.log(ada.data);
    // console.log(firestore.collection('search_result').doc('elementsHTML').data);
  };
