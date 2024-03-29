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
    const cityDoc = firestore.collection('search_result').doc('cities');
    const cityDocSnapshot = await cityDoc.get();
    const {
        cities
    } = cityDocSnapshot.data();

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

    const entries = Object.entries(cities);
    //SORT
    var arrayOfCites = [];
    arrayOfCites = entries.map(([one, two]) => [two.counter, two.name]);
    arrayOfCites.sort((a, b) => a[0] - b[0]).reverse();
    const sortable = arrayOfCites.map((a, b) => `
    <td>${a[1]}</td>
    <td>${a[0]}</td>`);
    firestore.collection('search_result').doc('sortable').set({sortable: sortable});

    // const elementsHTML = entries.map(([number, counter]) => `
    // <td>${counter.name}</td>
    // <td>${counter.counter}</td>`);
    // console.log(elementsHTML);
    //firestore.collection('search_result').doc('elementsHTML').update({content: elementsHTML});
    //firestore.collection('search_result').doc('elementsHTML').set({elementsHTML: elementsHTML});
});