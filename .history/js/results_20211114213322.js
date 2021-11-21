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

            //if (cityInDataSet.counter<=
        } else {
            newCities.push({
                name: cityToAdd,
                counter: 1
            })
        }
        console.log(cityInDataSet.find({counter}));
    })
    await cityDoc.set({
        cities: newCities
    })

    const entries = Object.entries(cities);  
    console.log(entries);  
    const elementsHTML = entries.map(([number, counter]) => `<tr>
    <th scope="row">X</th>
    <td>${counter.name}</td>
    <td>${counter.counter}</td>
    </tr>`);
    //console.log(elementsHTML);

    firestore.collection('search_result').doc('elementsHTML').update({content: elementsHTML});
    firestore.collection('search_result').doc('elementsHTML').set({elementsHTML: elementsHTML});
    // const elementDoc = firestore.collection('search_result').doc('elementsHTML');
    // const elementDocSnapshot = await elementDoc.get();
    // console.log(elementDocSnapshot.data);
    // const {
    //     elementsHTML
    // } = elementDocSnapshot.data();

});