import { Pokemon } from "@/types/Pokemon.type";
import Link from "next/link";


interface PokemonDetailProps {
  pokemon: Pokemon;
}


const PokemonDetail = ({pokemon}: PokemonDetailProps) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{pokemon.korean_name} ({pokemon.name})</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div>
        <h2 className="text-2xl font-semibold">Types</h2>
        <ul>
          {pokemon.types.map((type, index) => (
            <li key={index}>{type.type.korean_name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Abilities</h2>
        <ul>
          {pokemon.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.korean_name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Moves</h2>
        <ul>
          {pokemon.moves.map((move, index) => (
            <li key={index}>{move.move.korean_name}</li>
          ))}
        </ul>
      </div>
      <Link href='/'>뒤로가기</Link>
    </div>
  );
};

export default PokemonDetail;