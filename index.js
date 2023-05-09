async function getModelStarshipById(id) {
  const getPeopleUrls = await fetch("https://swapi.dev/api/people/" + id);
  const dataPeople = await getPeopleUrls.json();

  const starshipUrls = dataPeople.starships;

  const result = [];
  for (let i = 0; i < starshipUrls.length; i++) {
    const getStarship = await fetch(starshipUrls[i]);
    const dataStarship = await getStarship.json();

    result.push(dataStarship.model);
  }
  return result;
}

getModelStarshipById(1)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
