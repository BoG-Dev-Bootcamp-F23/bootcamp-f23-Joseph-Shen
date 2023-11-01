const pokemonAPI = "https://pokeapi.co/api/v2/type/"

export default async function handler(req, res) {
    if (req.method === "GET") {
        const {type} = req.query;
        console.log(type);
        try {
          const response = await fetch(pokemonAPI + type);
          const data = await response.json();
          console.log(data);
          res.status(200).json(data.pokemon.map((data) => data.pokemon.name));
        } 
        catch {
            res.status(400).json({"status": "Invalid Types"});
        }
  }
  else {
    res.status(500).json({"status": "Wrong Method"});
  }

}