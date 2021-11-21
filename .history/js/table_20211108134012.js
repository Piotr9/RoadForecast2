
    const firestore = firebase.firestore();
    const cityDoc = firestore.collection('search_result').doc('cities');
    const cityDocSnapshot = await cityDoc.get();
    const { 
        cities 
    } = cityDocSnapshot.data();

    const elementsHTML = cities.map(([name, counter]) => `<p>${name} - ${counter} </p>`);