'use client';

import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import PokemonList from '@/app/pokemons/_components/PokemonList';

import type { Pokemon } from '@/types/Pokemon.type';

const PokemonContainer = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | AxiosError>(null);


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
      <div className="h-screen flex flex-col justify-center items-center font-dalmoori">
        <div className="text-xl flex flex-col p-4 justify-center items-center gap-2 rounded-lg w-[400px]">
          {/* <p className="font-semibold">포켓몬 도감</p> */}
          <img src='/pokemon_logo.png' alt="포켓몬 로고" />
          <p className="text-lg mt-5">--- 포켓몬 데이터 수집 중 ---</p>
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
    <div><PokemonList pokemons={pokemons}/></div>
  )
}

export default PokemonContainer