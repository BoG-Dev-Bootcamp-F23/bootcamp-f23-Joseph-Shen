const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"

function process(data) {
    return {
        pokemonName: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map((typea) => typea.type.name)
    };
}

export default async function handler(req, res) {
    if (req.method === "GET") {
        const {name} = req.query;
        try {
          const response = await fetch(pokemonAPI + name);
          const data = await response.json();
          console.log(data);
          res.status(200).json(process(data));
        }
        catch {
            res.status(400).json({"status": "Invalid Names"});
        }
  }
  else {
    res.status(500).json({"status": "Wrong Method"});
  }

}