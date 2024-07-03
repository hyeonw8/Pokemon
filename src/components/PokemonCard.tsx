'use client';

import React from 'react';

import type { Pokemon } from '@/types/Pokemon.type';

interface PokemonCardPorps {
  pokemon: Pokemon;
  onClick: () => void;
}

const PokemonCard = ({ pokemon, onClick }: PokemonCardPorps) => {
  return (
    <div
      className="flex flex-col p-4 rounded-xl border-white border-4 border-dashed text-center font-DungGeunMo font-bold cursor-pointer"
      onClick={onClick}
    >
      <img
        src={pokemon.sprites.front_default}
        alt={`${pokemon.korean_name} 이미지`}
      />
      <p>{pokemon.korean_name}</p>
      <p>도감번호 : {pokemon.id}</p>
    </div>
  );
};

export default PokemonCard;
