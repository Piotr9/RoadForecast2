const firestore = firebase.firestore();
// window.onload = ;
const elementDoc = firestore.collection('search_result').doc('elementsHTML');
const elementDocSnapshot = await elementDoc.get();
console.log(elementDocSnapshot.data);
// console.log(firestore.collection('search_result').doc('elementsHTML').data);
