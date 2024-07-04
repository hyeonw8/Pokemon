import { Pokemon } from '@/types/Pokemon.type';
import Link from 'next/link';
import { Colors, typeColors } from './PokemonMoveColor';

interface PokemonDetailProps {
  pokemon: Pokemon;
  // onClick: () => void;
}

const PokemonDetail = ({ pokemon }: PokemonDetailProps) => {
  const formatHeightAndWeight = (data: number) => {
    const stringData = data.toString();

    if (stringData.length === 1) {
      return `0.${stringData}`;
    }
    if (stringData.length !== 1) {
      return `${stringData.slice(0, -1)}.${stringData.slice(-1)}`;
    }
  };

  return (
    <div className="p-5 relative">
      <Link href="/">
        <img
          src="/pixel-speech-bubble.png"
          alt="뒤로가기 이미지"
          className="w-[90px] absolute left-72"
        />
      </Link>
      <div className="w-5/12 mx-auto bg-white flex flex-col justify-center items-center font-DungGeunMo text-black rounded-xl border">
        <div className="text-center w-full bg-neutral-200 p-3 rounded-xl">
          <p className="text-2xl font-medium">{pokemon.korean_name}</p>
          <p className="text-xl">
            {`No.${pokemon.id.toString().padStart(4, '0')}`}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-5 text-center leading-8">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p className="text-lg font-semibold">이름 : {pokemon.korean_name}</p>
          <div className="flex flex-row gap-3 mb-1 text-lg">
            <p>키 : {formatHeightAndWeight(pokemon.height)} m</p>
            <p>무게 : {formatHeightAndWeight(pokemon.weight)} kg</p>
          </div>
          <div className="flex flex-row gap-x-5">
            <div className="flex flex-row items-center mb-2">
              <span>타입 :</span>
              {pokemon.types.map((type, index) => (
                <span
                  key={index}
                  className={`${
                    typeColors[type.type.korean_name as keyof Colors] || 'bg-gray-500'
                  } ml-2 px-2 rounded text-white`}
                >
                  {type.type.korean_name}
                </span>
              ))}
            </div>
            <div className="flex flex-row items-center mb-2">
              <span>능력 :</span>
              {pokemon.abilities.map((type, index) => (
                <span
                  key={index}
                  className="bg-blue-500 ml-2 px-2 rounded text-white"
                >
                  {type.ability.korean_name}
                </span>
              ))}
            </div>
          </div>
          <div className='p-4'>
            <p>기술 : </p>
            <span>
              {pokemon.moves.map((move) => move.move.korean_name).join(' • ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
