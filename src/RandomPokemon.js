import "./RandomPokemon.css"
import PokeIndex from './PokeIndex';

export default function RandomPokemon() {
    const randomNumber = (Math.floor(Math.random() * 151) + 1);

    return (
        <div className="PokeBoarder">
            <h1>{<PokeIndex />}{randomNumber}</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`}
                alt={`Pokemon ${randomNumber}`}
            />
        </div>
    )

};


//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png

