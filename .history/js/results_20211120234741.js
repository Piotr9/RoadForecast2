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
    //const sorted = cityDoc.data().orderBy("counter", "desc");

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


    //console.log(cityDocSnapshot.entries(cities));
    const entries = Object.entries(cities);
    // console.log(entries);
    // var sortable = [];
    // for (var citi in entries) {
    //     sortable.push([citi, entries[counter]]);
    // }

    // sortable.sort(function(a, b) {
    //     return a[1] - b[1];
    // });
 
    const elementsHTML = entries.map(([number, counter]) => `
    <td>${counter.name}</td>
    <td>${counter.counter}</td>`);

    const sortable = entries.map(([number, counter]);
    console.log(sortable);


    //firestore.collection('search_result').doc('cities').orderBy("counter");
    //firestore.collection('search_result').doc('elementsHTML').update({content: elementsHTML});
    firestore.collection('search_result').doc('elementsHTML').set({elementsHTML: elementsHTML});
    // const elementDoc = firestore.collection('search_result').doc('elementsHTML');
    // const elementDocSnapshot = await elementDoc.get();
    // console.log(elementDocSnapshot.data);
    // const {
    //     elementsHTML
    // } = elementDocSnapshot.data();

});