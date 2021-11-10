const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const departure = document.querySelector('input[data-type="departure"]');
    const destinationArray = document.querySelectorAll('input[data-type="destination"]');

    const departureValue = departure.value;
    const destinationValues = Array.from(destinationArray).map(({
        value
    }) => value)



    const citiesToAdd = [departureValue, ...destinationValues].map(value => value.toLowerCase())
    const firestore = firebase.firestore();
    //const cityDoc = firestore.collection('search_result')
    const cityDoc = await  firestore.collection('search_result').get()
    console.log( cityDoc.docs.length,  cityDoc.docs)
    const cityDocSnapshot = await cityDoc.get();
    const cos = cityDocSnapshot.data();
    // const cos = cityDocSnapshot.id;
    console.log(cityDocSnapshot, cos)
    return

    const newCities = [...cities];
    citiesToAdd.forEach(cityToAdd => {
        const cityInDataSet = newCities.find((({
            name
        }) => name === cityToAdd))
        if (cityInDataSet) {
            const cityIndex = newCities.indexOf(cityInDataSet);
            cityInDataSet.counter++;
            newCities[cityIndex] = cityInDataSet;
        } else {
            newCities.push({
                name: cityToAdd,
                counter: 1
            })
        }
    })
    await cityDoc.set({
        cities: newCities
    })

});