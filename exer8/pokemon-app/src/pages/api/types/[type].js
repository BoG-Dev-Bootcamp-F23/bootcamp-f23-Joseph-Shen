const pokemonAPI = "https://pokeapi.co/api/v2/type/"

export default async function handler(req, res) {
  const {type} = req.query;
  console.log(type);
  if (type) {
    const response = await fetch(pokemonAPI + type);
    const data = await response.json();
    console.log(data);
    res.status(200).json(data.pokemon.map((data) => data.pokemon.name));
  } else {
    const id = Math.floor(Math.random() * 1000) + 1;
    const response = await fetch(pokemonAPI + id);
    const data = await response.json();
    res.status(200).json(data);
  }

}