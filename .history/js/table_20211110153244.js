// const firestore = firebase.firestore();
// window.onload = ;
const asa = firebase.firestore().collection('search_result').doc('elementsHTML');
const ada = asa.get();
console.log(asa);
// console.log(firestore.collection('search_result').doc('elementsHTML').data);
