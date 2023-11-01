const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"

function process(data) {
    return {
        pokemonName: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map((typea) => typea.type.name)
    };
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const name1 = req.body.pokemon1;
    const name2 = req.body.pokemon2;
        try {
            const response1 = await fetch(pokemonAPI + name1);
            const data1 = await response1.json();
            const response2 = await fetch(pokemonAPI + name2);
            const data2 = await response2.json();
            console.log(process(data1));
            console.log(process(data2));
            if (data1.base_experience > data2.base_experience) res.status(200).json(process(data1));
            else res.status(200).json(process(data2));
        }
        catch {
            res.status(400).json({"status": "Invalid Names"});
        }
  }
  else {
    res.status(500).json({"status": "Wrong Method"});
  }

}