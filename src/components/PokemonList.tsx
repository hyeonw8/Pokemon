'use client';

import React, { useEffect, useState } from 'react';
import { Pokemon } from '@/types/Pokemon.type';
import axios, { AxiosError } from 'axios';
import PokemonCard from './PokemonCard';
import { useRouter } from 'next/navigation';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | AxiosError>(null);

  const router = useRouter();

  const handleClickCard = (pokemon: Pokemon) => {
    router.push(`/pokemons/${pokemon.id}`);
  };

  useEffect(() => {
    const pokemonData = async () => {
      try {
        const response = await axios.get('/api');
        console.log(response);
        setPokemons(response.data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error);
        }
        console.log('api오류', error);
      } finally {
        setIsLoading(false);
      }
    };

    pokemonData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-xl flex flex-col p-4 justify-center items-center gap-2 bg-slate-500 shadow-md rounded-lg w-[400px] h-[80px]">
          <p className="font-semibold">포켓몬 도감</p>
          <p className="text-base">포켓몬 도감 데이터 가져오는 중! </p>
        </div>
      </div>
    );
  }

  if (error) {
    console.error(error);
    console.log(error);
    return <div className="text-xl">에러가 발생했습니다: {error?.message}</div>;
  }

  return (
    <>
      <p className='font-dalmoori text-xl text-center'>앗! 야생의 포켓몬이 나타났다...!</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-5'>
          {pokemons.map((pokemon, idx) => <PokemonCard key={idx} pokemon={pokemon} onClick={() => handleClickCard(pokemon)}/>)}
      </div>
    </>
  );
};

export default PokemonList;
