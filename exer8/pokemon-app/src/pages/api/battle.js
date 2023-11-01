const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"

export default async function handler(req, res) {
  const name1 = req.query.pokemon1;
  const name2 = req.query.pokemon2;
  if (name1 && name2) {
    const response1 = await fetch(pokemonAPI + name1);
    const data1 = await response.json();
    const response2 = await fetch(pokemonAPI + name1);
    const data2 = await response.json();
    console.log(data1);
    console.log(data2);
    if (data1.base_experience > data2.base_experience) res.status(200).json(data1);
    else res.status(200).json(data2);
  } else {
    const id = Math.floor(Math.random() * 1000) + 1;
    const response = await fetch(pokemonAPI + id);
    const data = await response.json();
    res.status(200).json(data);
  }

}