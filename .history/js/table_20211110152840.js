// const firestore = firebase.firestore();
// window.onload = ;
const asa = firebase.firestore().collection('search_result').doc('elementsHTML'.get());
// const elementDocSnapshot = elementDoc.get();
console.log(asa.data);
// console.log(firestore.collection('search_result').doc('elementsHTML').data);
