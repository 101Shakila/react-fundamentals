import "./RandomPokemon.css"


//So this function will generate random pokemons and mention the number of the pokemon and generate respective pokemon.
export default function RandomPokemon() {
    const randomNumber = (Math.floor(Math.random() * 151) + 1);
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`;
    return (
        <div className="RandomPokemon">
            <h1>Pokemon: #{randomNumber}</h1>
            <img
                src={url}
                alt={`Pokemon ${randomNumber}`}
            />
        </div>
    )

};


//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png

